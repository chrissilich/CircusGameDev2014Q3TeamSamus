#pragma strict

private var porchLight:GameObject;
private var lightTiming:int = 0;

function Start () {
	porchLight = gameObject.Find("PorchLight1");
	porchLight.SetActive(false);
}

function OnTriggerEnter() {
	InvokeRepeating("lightTimer", 0.1, 1);
}

function lightTimer () {
	lightTiming++;

	if(lightTiming == 3) {
		porchLight.SetActive(true);
		CancelInvoke("cacheTimer");
	}
}