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
var customBtn : GUIStyle;
function OnGUI () {
    // Make a background box
    var halfX = (Camera.main.pixelWidth/2)-300;
    var halfY = (Camera.main.pixelHeight/2)-200;
    GUI.Box (Rect (halfX,halfY,600,400), "Would You Like To Store Your Trash or Pick Up Your Stash?", customBG);
    GUI.Label (Rect(halfX, halfY+105, 600, 100), "Your cache currently has "+LevelController.cachedTrash+" pieces of trash.", customLabel);
    // Make the first button. 
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)-250,(Camera.main.pixelHeight/2.5)+35,200,100), "Store Trash", customBtn)) {
        //Dump trash
        //Set CachedTrash to equal CachedTrash+CurrentTrash
        //Set currentTrash to 0
        //Close Modal
        LevelController.storeTrash();
        LevelController.currentTrash = 0;
        CacheController.closeCacheModal();
    }

    // Make the second button.
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)+50,(Camera.main.pixelHeight/2.5)+35,200,100), "Pick Up Stash", customBtn)) {
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
    if (GUI.Button (Rect ((Camera.main.pixelWidth/2)-75,(Camera.main.pixelHeight/2.5)+35+125,150,75), "Close", customBtn)) {
        //User doesn't want to do either
        //Close Modal
        CacheController.closeCacheModal();
    }
}