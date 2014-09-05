#pragma strict

var LevelController:LevelController;
var particleA:ParticleSystem;
var ricky;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleA = gameObject.Find("ParticlesAddAware").GetComponent("ParticleSystem");
}


function OnTriggerEnter(other: Collider) {
	if(other.gameObject.tag == "Player"){
		Debug.Log("lights triggered by ricky");
		InvokeRepeating("addAwareness", 0.1, 1);
	}
}

function addAwareness () {
	LevelController.giveAware(1);
	particleA.Play();
}


function OnTriggerExit() {
		CancelInvoke("addAwareness");
}


