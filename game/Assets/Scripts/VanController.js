#pragma strict

function OnTriggerEnter(other: Collider) {
	// Debug.Log("Hit By Car");
	//Hit By Car and Killed
	//Trigger change to Game Over Scene
	if(other.gameObject.tag == "Player") {
		Application.LoadLevel("GameOverScene");
	}
}
