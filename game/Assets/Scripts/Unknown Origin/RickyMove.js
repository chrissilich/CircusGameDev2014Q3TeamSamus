#pragma strict

function Start () {

}

function FixedUpdate () {
	var animatorComponent:Animator = this.GetComponent("Animator");
	animatorComponent.SetInteger("state", 0);

}



