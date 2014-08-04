#pragma strict
var LevelController:LevelController;

function Start() {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


function Update () {
	if(LevelController.currentAware >= 10) {
		Debug.Log("Game Over, Star Fox.");
		Application.LoadLevel("StarScene");
	}
}