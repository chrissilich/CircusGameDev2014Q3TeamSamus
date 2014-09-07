#pragma strict
var LevelController:LevelController;
var CacheController:CacheController;
function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	CacheController = gameObject.Find("Cache").GetComponent("CacheController");
}

function Update () {

}

var customBG : GUIStyle;
var customLabel : GUIStyle;
var cacheLabel : GUIStyle;
var stashBtn : GUIStyle;
var pickUpBtn : GUIStyle;
var closeBtn : GUIStyle;
function OnGUI () {
    // Make a background box
    var halfX = (Camera.main.pixelWidth/2);
    var halfY = (Camera.main.pixelHeight/2);
    GUI.Label (Rect(halfX-121, halfY-162, 242, 96), "", customLabel);
    GUI.Label (Rect(halfX-10, halfY-110, 242, 96), " "+LevelController.cachedTrash, cacheLabel);
    // Make the first button. 
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)-362,(Camera.main.pixelHeight/2)-50,350,99), "", stashBtn)) {
        //Dump trash
        //Set CachedTrash to equal CachedTrash+CurrentTrash
        //Set currentTrash to 0
        //Close Modal
        LevelController.storeTrash();
        LevelController.currentTrash = 0;
        CacheController.closeCacheModal();
    }

    // Make the second button.
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)+12,(Camera.main.pixelHeight/2)-40,370,79), "", pickUpBtn)) {
        //PickUp trash
        //Set CurrentTrash to equal CachedTrash+CurrentTrash
        //Set CachedTrash to 0
        //Close Modal
        LevelController.pickUpTrash();
        LevelController.cachedTrash = 0;
        CacheController.closeCacheModal();
        Debug.Log("cachedTrash = " + LevelController.cachedTrash);
    }

    //Make the third button
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)-75,(Camera.main.pixelHeight/2.5)+35+125,209,48), "Close", closeBtn)) {
        //User doesn't want to do either
        //Close Modal
        CacheController.closeCacheModal();
    }
}