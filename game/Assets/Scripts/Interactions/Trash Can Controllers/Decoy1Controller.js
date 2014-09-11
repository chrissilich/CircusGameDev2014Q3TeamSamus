#pragma strict
var animatorComponent:Animator;
var ricky:GameObject;
var rickyInCan:RickyMovements;
var particleT:ParticleSystem;
var LevelController:LevelController;
private var trashTriggered:boolean = false;


function Start() {
	animatorComponent = this.GetComponent("Animator");
	ricky = gameObject.Find("Ricky");
	rickyInCan = gameObject.Find("Ricky").GetComponent("RickyMovements");
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleT = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleSystem");

}

function OnTriggerEnter(other : Collider) {
	if (!trashTriggered) {
		//Freeze in Position
		ricky.SendMessage("inACan");
		Debug.Log("in can");
		//Start Timer
		InvokeRepeating("buttWiggleTimer", 0.1, 1);
	}
}

var buttWiggleTime:int = 0;
function buttWiggleTimer() {
	if (buttWiggleTime == 0) {
		Debug.Log("butt "+buttWiggleTime);
		//Switch Trash Can Sprite
		animatorComponent.SetInteger("canState", 1);

		//Add Awareness
		LevelController.giveAware(1);

		//Change sprite
		rickyInCan.inCan = true;

		buttWiggleTime++;

		
	}else if(buttWiggleTime < 3) {
		Debug.Log("butt "+buttWiggleTime);
		buttWiggleTime++;
	} else if(buttWiggleTime == 3) {
		Debug.Log("butt end at "+buttWiggleTime);
		//Chnage can sprite to trash on ground (N/A to Decoys)
		// animatorComponent.SetInteger("canState", 1);

		//Add Trash
		LevelController.giveTrash(0);

		//Send Message to Unfreeze
		//Change Sprite
		ricky.SendMessage("outOfCan");

		//Reset variables
		rickyInCan.inCan = false;
		buttWiggleTime = 0;
		CancelInvoke("buttWiggleTimer");

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