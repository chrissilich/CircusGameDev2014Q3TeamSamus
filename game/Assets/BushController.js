#pragma strict

var LevelController:LevelController;
var particleA:ParticleSystem;
var ricky;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	particleA = gameObject.Find("ParticlesSubAware").GetComponent("ParticleSystem");
}


function OnTriggerEnter() {
	InvokeRepeating("subAwareness", 0.1, 3);
}

function subAwareness () {
	if(LevelController.currentAware > 0) {
		LevelController.takeAware(1);
		Debug.Log(LevelController.currentAware); 
		particleA.Play();
	}
}


function OnTriggerExit() {
	CancelInvoke("subAwareness");
}
