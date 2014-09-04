#pragma strict
var LevelController:LevelController;
var CacheController:CacheController;
function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
	CacheController = gameObject.Find("Cache").GetComponent("CacheController");
}

function Update () {

}

var storeButtonTexture:Texture;
var pickUpButtonTexture:Texture;
var closeButtonTexture:Texture;
// function OnGUI() {
// 	var storeButton = GUI.Button(Rect(600, 450, 200, 100), storeButtonTexture, GUIStyle.none);
// 	var pickUpButton = GUI.Button(Rect(1000, 450, 200, 100), pickUpButtonTexture, GUIStyle.none);
// 	var closeButton = GUI.Button(Rect(400, 300, 200, 100), closeButtonTexture, GUIStyle.none);

// 	if(storeButton){
// 		//Dump trash
// 		//Set CachedTrash to equal CachedTrash+CurrentTrash
// 		//Set currentTrash to 0
// 		//Close Modal
// 		LevelController.storeTrash();
// 		LevelController.currentTrash = 0;
// 		CacheController.closeCacheModal();
// 	}
// 	if(pickUpButton){
// 		//PickUp trash
// 		//Set CurrentTrash to equal CachedTrash+CurrentTrash
// 		//Set CachedTrash to 0
// 		//Close Modal
// 		LevelController.pickUpTrash();
// 		LevelController.cachedTrash = 0;
// 		CacheController.closeCacheModal();
// 		Debug.Log("cachedTrash = " + LevelController.cachedTrash);
// 	}
// 	if(closeButton){
// 		//User doesn't want to do either
// 		//Close Modal
// 		CacheController.closeCacheModal();
// 	}
// }
var customBG : GUIStyle;
var customBtn : GUIStyle;
function OnGUI () {
    // Make a background box
    var halfX = (Camera.main.pixelWidth/2)-300;
    var halfY = (Camera.main.pixelHeight/2)-200;

    GUI.Box (Rect (halfX,halfY,600,400), "Would You Like To Store Your Trash or Pick Up Your Stash?", customBG);

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (Camera.main.pixelWidth/2,(Camera.main.pixelHeight/2),80,20), "Store Trash", customBtn)) {
        Application.LoadLevel (1);
    }

    // Make the second button.
    if (GUI.Button (Rect (Camera.main.pixelWidth/2,(Camera.main.pixelHeight/2)+30,80,20), "Pick Up Stash", customBtn)) {
        Application.LoadLevel (2);
    }
}