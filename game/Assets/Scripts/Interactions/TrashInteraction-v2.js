#pragma strict

var LevelController:LevelController;
var particleT:ParticleSystem;
var particleA:ParticleSystem;
var ricky;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


private var trashTriggered:boolean = false;
function OnTriggerEnter() {
	if(!trashTriggered){
		particleT = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleSystem");
		particleA = gameObject.Find("ParticlesAddAware").GetComponent("ParticleSystem");

		addAwareness();

		//To grab the animator controller from Ricky
		// var animController:Animator = gameObject.Find("Ricky").GetComponent("Animator");
		// animController.SetBool("CollectTrash", true);
	}
}

function addAwareness () {
	if(this.tag =="Normal Trash") {
		LevelController.giveAware(1);
		particleA.Play();
	} else if(this.tag =="Locked Trash") {
		LevelController.giveAware(3);
		particleA.Play();
	} else if (this.tag =="Decoy Trash") {
		LevelController.giveAware(1);
		Debug.Log(particleA);
		particleA.Play();
	}
}


function OnTriggerExit() {
	if(!trashTriggered){
		if(this.tag =="Normal Trash") {
			LevelController.giveTrash(100);
			particleT.Play();
		} else if(this.tag =="Locked Trash") {
			LevelController.giveTrash(500);
			particleT.Play();

			//How does this repeat for 3 points? Or do I need a new particle?
		} else if (this.tag =="Decoy Trash") {
			var animatorComponent:Animator = this.GetComponent("Animator");
			LevelController.giveTrash(0);
			particleT.Play();

		}
		trashTriggered = true;
	}
	Debug.Log(this.tag); 
}


//SWITCHING ANIMATION STATE
// animatorComponent.SetInteger("state", 0);

