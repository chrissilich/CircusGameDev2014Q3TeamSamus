#pragma strict
var LevelController:LevelController;
var CacheController:CacheController;
function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	CacheController = gameObject.Find("Cache").GetComponent("CacheController");
}

function Update () {

}

var achieveBack : GUIStyle;

function OnGUI () {
    // Produce the Achievement background plank (with can)
    var camX = (Camera.main.pixelWidth);
    var camY = (Camera.main.pixelHeight);
    GUI.Label (Rect(camX-105, camY-57, 210, 114), "", achieveBack);
   
}