#pragma strict

var LevelController:LevelController;
var particleA:ParticleSystem;
var ricky;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleA = gameObject.Find("ParticlesAddAware").GetComponent("ParticleSystem");
}


function OnTriggerEnter() {
		Debug.Log("streetlight"); 
		InvokeRepeating("addAwareness", 0.1, 1);
}

function addAwareness () {
	LevelController.giveAware(1);
	particleA.Play();
}


function OnTriggerExit() {
		CancelInvoke("addAwareness");
}


