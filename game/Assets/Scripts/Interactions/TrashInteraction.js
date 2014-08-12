#pragma strict

var LevelController:LevelController;
var particle:ParticleSystem;
var ricky;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particle = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleSystem");

	// particle = gameObject.Find("ParticlesAddTrash").GetComponent("ParticleEmitter");
}

function Update () {

}
private var trashTriggered:boolean = false;
function OnTriggerEnter() {
	if(!trashTriggered){
		Debug.Log("trash"); 

		//To grab the animator controller from Ricky
		// var animController:Animator = gameObject.Find("Ricky").GetComponent("Animator");
		// animController.SetBool("CollectTrash", true);
	}
	InvokeRepeating("addAwareness", 0.1, 1);
}

function addAwareness () {
	LevelController.giveAware(1);
}


function OnTriggerExit() {
	if(!trashTriggered){
		trashTriggered = true;
		LevelController.giveTrash(1);
		CancelInvoke("addAwareness");
		particle.Play();
	}
}


