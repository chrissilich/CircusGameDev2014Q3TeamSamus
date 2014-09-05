#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter() {
	var newDirection;
	newDirection = Mathf.Round(Random.Range(1, 3));
	Debug.Log("random num is "+newDirection);
}