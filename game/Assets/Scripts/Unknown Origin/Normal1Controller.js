#pragma strict
private var Normal1Open:GameObject;
private var Normal1Closed:GameObject;
function Start () {
	Normal1Open = gameObject.Find("Normal1Open");
	Normal1Closed = gameObject.Find("Normal1Closed");
	Normal1Open.SetActive(false);
}

function OnTriggerEnter() {
	//TrashTrigger is attached to the Open version
	//It triggers as soon as it is set to active, because
	//Ricky is already inside of the trigger zone.
	Normal1Open.SetActive(true);
	Normal1Closed.SetActive(false);
}

