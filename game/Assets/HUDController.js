#pragma strict
var LevelController:LevelController;
function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}

function Update () {

}

var customBG : GUIStyle;
var customLabel : GUIStyle;
var customBtn : GUIStyle;
function OnGUI () {
    // Make a background box
    var halfX = (Camera.main.pixelWidth/2)-300;
    var halfY = (Camera.main.pixelHeight/2)-200;
    GUI.Box (Rect (halfX,halfY,600,400), "Would You Like To Store Your Trash or Pick Up Your Stash?", customBG);
    GUI.Label (Rect(halfX, halfY+105, 600, 100), "score "+LevelController.cachedTrash+" pieces of trash.", customLabel);
    GUI.Label (Rect(halfX, halfY+105, 600, 100), "Your cache currently has "+LevelController.cachedTrash+" pieces of trash.", customLabel);
    GUI.Label (Rect(halfX, halfY+105, 600, 100), "Awareness "+LevelController.cachedTrash+" pieces of trash.", customLabel);
    GUI.Label (Rect(halfX, halfY+105, 600, 100), "Awareness "+LevelController.cachedTrash+" pieces of trash.", customLabel);

}



//SCORE CONTROLLER
#pragma strict
var LevelController:LevelController;

function Start() {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


function OnGUI () {
	guiText.text = LevelController.currentTrash.ToString();
}

function Update () {

}



//AWARE CONTROLLER
#pragma strict
var LevelController:LevelController;

function Start() {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


function OnGUI () {
	guiText.text = LevelController.currentAware.ToString();
}

function Update () {

}
