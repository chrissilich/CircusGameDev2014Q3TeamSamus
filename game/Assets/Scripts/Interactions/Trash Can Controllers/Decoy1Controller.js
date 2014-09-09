#pragma strict
var animatorComponent:Animator;
var ricky:GameObject;
var rickyAnim:Animator;

function Start() {
	animatorComponent = this.GetComponent("Animator");
	ricky = gameObject.Find("Ricky");
	rickyAnim = gameObject.Find("Ricky").GetComponent("Animator");
}

function OnTriggerEnter(other : Collider) {
	//Freeze in Position
	ricky.SendMessage("inACan");
	//Start Timer
	InvokeRepeating("buttWiggleTimer", 0.1, 1);


}
var lockedCount:int = 0;
function buttWiggleTimer() {
	if (lockedCount = 0) {
		//Add Awareness
		//Change sprite
		
	}else if(lockedCount<3) {
		lockedCount++;
	} else {
		//Add Trash
		//Change Sprite
		//Send Message to Unfreeze
	}
}

//On Trigger Enter function
	//Freeze Player Position
	//Start Timer for 3 seconds
	//If Timer  = 0 seconds
		//Trigger Sprite Change to butt Wiggle
		//Add 1 Aware
	//If Timer = 3 seconds
		//Trigger change to Idle Sprite Back
		//Unfreeze Player Position
		//Add 0 Trash