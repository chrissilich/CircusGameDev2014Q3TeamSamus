#pragma strict
var animatorComponent:Animator;
var ricky:GameObject;
var rickyInCan:RickyMovements;
var particleT:ParticleSystem;
var LevelController:LevelController;
private var trashTriggered:boolean = false;
var particleA:ParticleSystem;




function Start() {
	animatorComponent = this.GetComponent("Animator");
	ricky = gameObject.Find("Ricky");
	rickyInCan = gameObject.Find("Ricky").GetComponent("RickyMovements");
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleT = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleSystem");
	particleA = gameObject.Find("ParticlesAddAware").GetComponent("ParticleSystem");

}

function OnTriggerEnter(other : Collider) {
	if (!trashTriggered) {
		//Freeze in Position
		ricky.SendMessage("inACan");
		Debug.Log("in can");
		//Start Timer
		InvokeRepeating("buttWiggleTimer", 0.1, 1);
		trashTriggered = true;
	}
}

var buttWiggleTime:int = 0;
function buttWiggleTimer() {
	if (buttWiggleTime == 0) {
		Debug.Log("butt "+buttWiggleTime);
		//Switch Trash Can Sprite
		animatorComponent.SetInteger("canState", 1);

		//Add Awareness
		InvokeRepeating("addLockedAware", 0.1, 1); //This is for locked only

		//Change sprite
		rickyInCan.inCan = true;

		buttWiggleTime++;

		
	}else if(buttWiggleTime < 5) {
		Debug.Log("butt "+buttWiggleTime);
		buttWiggleTime++;
	} else if(buttWiggleTime == 5) {
		Debug.Log("butt end at "+buttWiggleTime);
		//Change can sprite to trash on ground (N/A to Decoys)
		animatorComponent.SetInteger("canState", 2);

		//Add Trash
		LevelController.giveTrash(5);
		LevelController.giveScore("locked");

		//Play Trash Particles
		//None for Decoy
		// particleT.Play(); //This is for normal
		InvokeRepeating("addLockedTrash", 0.1, 1); //This is for locked

		//Send Message to Unfreeze
		//Change Sprite
		ricky.SendMessage("outOfCan");

		//Reset variables
		rickyInCan.inCan = false;
		buttWiggleTime = 0;
		CancelInvoke("buttWiggleTimer");

	}
}

var lockedCount:int = 0;
function addLockedTrash() {
	if(lockedCount<=4) {
		lockedCount++;
		particleT.Play();
	}
}
var lockedAwareCount:int = 0;
function addLockedAware() {
	if(lockedAwareCount<=2) {
		lockedAwareCount++;
		particleA.Play();
	}
}


// On Trigger Enter function
// 	Freeze Player Position
// 	Start Timer for 3 seconds
// 	If Timer  = 0 seconds
// 		Trigger Sprite Change to butt Wiggle
// 		Add 1 Aware
// 	If Timer = 3 seconds
// 		Trigger change to Idle Sprite Back
// 		Unfreeze Player Position
// 		Add 0 Trash