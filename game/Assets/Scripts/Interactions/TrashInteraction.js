#pragma strict

var LevelController:LevelController;

function Start () {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}

function Update () {

}
private var trashTriggered:boolean = true;
function OnTriggerEnter() {
	if(trashTriggered){
		Debug.Log("trash"); 
		trashTriggered = false;

		//To grab the animator controller from Ricky
		// var animController:Animator = gameObject.Find("Ricky").GetComponent("Animator");
		// animController.SetBool("CollectTrash", true);
	}
	InvokeRepeating("addAwareness", 0.1, 1);
}

function addAwareness () {
	LevelController.giveAware(1);
}


function OnTriggerExit() {
	if(!trashTriggered){
		trashTriggered = true;
		LevelController.givePoints(1);
		CancelInvoke("addAwareness");
	}
}
