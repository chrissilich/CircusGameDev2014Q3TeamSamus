#pragma strict

var LevelController:LevelController;
var particleT:ParticleSystem;
var particleA:ParticleSystem;
var ricky;


function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleT = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleSystem");
	particleA = gameObject.Find("ParticlesAddAware").GetComponent("ParticleSystem");
}


private var trashTriggered:boolean = false;
function OnTriggerEnter() {
	if(!trashTriggered){
		InvokeRepeating("addAwareness", 0.1, 1);

		//To grab the animator controller from Ricky
		// var animController:Animator = gameObject.Find("Ricky").GetComponent("Animator");
		// animController.SetBool("CollectTrash", true);
	}
}

function addAwareness () {
	LevelController.giveAware(1);
	particleA.Play();
}


function OnTriggerExit() {
	if(!trashTriggered){
		if(this.tag =="Normal Trash") {
			LevelController.giveTrash(1);
			particleT.Play();
		} else if(this.tag =="Locked Trash") {
			LevelController.giveTrash(3);
			particleT.Play();
			//How does this repeat for 3 points? Or do I need a new particle?
		} else if (this.tag =="Decoy Trash") {
			LevelController.giveTrash(0);
		}
		trashTriggered = true;
		CancelInvoke("addAwareness");
	}
	Debug.Log(this.tag); 
}





//SWITCHING ANIMATION STATE
// animatorComponent.SetInteger("state", 0);

