#pragma strict
private var Locked1Open:GameObject;
private var Locked1Closed:GameObject;
function Start () {
	Locked1Open = gameObject.Find("Locked1Open");
	Locked1Closed = gameObject.Find("Locked1Closed");
	Locked1Open.SetActive(false);
}

function OnTriggerEnter() {
	//TrashTrigger is attached to the Open version
	//It triggers as soon as it is set to active, because
	//Ricky is already inside of the trigger zone.
	Locked1Open.SetActive(true);
	Locked1Closed.SetActive(false);
}

