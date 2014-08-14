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
		Debug.Log("trash"); 
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
		trashTriggered = true;
		LevelController.giveTrash(1);
		CancelInvoke("addAwareness");
		particleT.Play();
	}
}


