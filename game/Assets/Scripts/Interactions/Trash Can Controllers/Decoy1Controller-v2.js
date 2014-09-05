#pragma strict
private var Decoy1Open:GameObject;
private var Decoy1Closed:GameObject;
var RickyMove:RickyMovements;


function Start () {
	RickyMove = gameObject.Find("Ricky").GetComponent("RickyMovements");
	Decoy1Open = gameObject.Find("Decoy1Open");
	Decoy1Closed = gameObject.Find("Decoy1Closed");
	Decoy1Open.SetActive(false);
}

function OnTriggerEnter() {
	//TrashTrigger is attached to the Open version
	//It triggers as soon as it is set to active, because
	//Ricky is already inside of the trigger zone.
	Decoy1Open.SetActive(true);
	Decoy1Closed.SetActive(false);
	InvokeRepeating("cameraZoom", 0.1, 1);
	RickyMove.enabled = false;
}
var timer:int = 0;
function cameraZoom() {
	timer++;
	if(timer == 3) {
		RickyMove.enabled = true;
		CancelInvoke("changeTimer");
	}
}
