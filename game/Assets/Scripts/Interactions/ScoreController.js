#pragma strict
var LevelController:LevelController;

function Start() {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


function OnGUI () {
	guiText.text = LevelController.currentScore.ToString();
}

function Update () {

}