#pragma strict

var LevelController:LevelController;
function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}

function Update () {

}

var trashText : GUIStyle;
var trashLabel : GUIStyle;
var awareLabel : GUIStyle;
function OnGUI () {
    // Make a background box
    GUI.Label (Rect(0, 1, 209, 42), " ", trashLabel);

    GUI.Label (Rect( 100, 5,209,42), ""+LevelController.currentTrash, trashText);
    GUI.Label (Rect(Camera.main.pixelWidth-300, 1, 297, 88), " ", awareLabel);
}



//SCORE CONTROLLER


// function Start() {
// 	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
// }


// function OnGUI () {
// 	guiText.text = LevelController.currentTrash.ToString();
// }

// function Update () {

// }



//AWARE CONTROLLER


// function Start() {
// 	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
// }


// function OnGUI () {
// 	guiText.text = LevelController.currentAware.ToString();
// }

// function Update () {

// }
