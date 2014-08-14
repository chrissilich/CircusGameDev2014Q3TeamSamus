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
function OnGUI() {
	var storeButton = GUI.Button(Rect(600, 450, 200, 100), storeButtonTexture, GUIStyle.none);
	var pickUpButton = GUI.Button(Rect(1000, 450, 200, 100), pickUpButtonTexture, GUIStyle.none);
	var closeButton = GUI.Button(Rect(400, 300, 200, 100), closeButtonTexture, GUIStyle.none);

	if(storeButton){
		//Dump trash
		//Set CachedTrash to equal CachedTrash+CurrentTrash
		//Set currentTrash to 0
		//Close Modal
		LevelController.storeTrash();
		LevelController.currentTrash = 0;
		CacheController.closeCacheModal();
	}
	if(pickUpButton){
		//PickUp trash
		//Set CurrentTrash to equal CachedTrash+CurrentTrash
		//Set CachedTrash to 0
		//Close Modal
		LevelController.pickUpTrash();
		LevelController.cachedTrash = 0;
		CacheController.closeCacheModal();
		Debug.Log("cachedTrash = " + LevelController.cachedTrash);
	}
	if(closeButton){
		//User doesn't want to do either
		//Close Modal
		CacheController.closeCacheModal();
	}
}