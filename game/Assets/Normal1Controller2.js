#pragma strict
private var Normal1Final:GameObject;
private var Normal1Open:GameObject;
function Start () {
	Normal1Final = gameObject.Find("Normal1Final");
	Normal1Open = gameObject.Find("Normal1Open");
	Normal1Final.SetActive(false);
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
		Normal1Final.SetActive(true);
		CancelInvoke("changeTimer");
		Normal1Open.SetActive(false);
	}
	Debug.Log(timer);
}
