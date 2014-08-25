#pragma strict
private var Locked1Final:GameObject;
private var Locked1Open:GameObject;
function Start () {
	Locked1Final = gameObject.Find("Locked1Final");
	Locked1Open = gameObject.Find("Locked1Open");
	Locked1Final.SetActive(false);
}

function OnTriggerEnter() {
	//TrashTrigger is attached to the Open version
	//It triggers as soon as it is set to active, because
	//Ricky is already inside of the trigger zone.
	InvokeRepeating("changeTimer", 0.1, 1);
}
var timer:int = 0;
function changeTimer() {
	timer++;
	if(timer == 3) {
		Locked1Final.SetActive(true);
		CancelInvoke("changeTimer");
		Locked1Open.SetActive(false);
	}
	Debug.Log(timer);
}
