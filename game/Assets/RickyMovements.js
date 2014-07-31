#pragma strict

var walkSpeed: int = 5;
var jumpHeight: int = 10;

var spawn:GameObject;


function Start () {
	transform.position = spawn.transform.position;

}

function Update () {

}

function FixedUpdate () {
	rigidbody.velocity.x = walkSpeed;

	var startOfRay = transform.position;
	startOfRay.y -= 1.4;

	// Debug.DrawRay(startOfRay, -Vector2.up, Color.green, 1);

	var hit:RaycastHit2D = Physics.Raycast(startOfRay, -Vector2.up, 0.01);
	var animatorComponent:Animator = this.GetComponent("Animator");



	if (hit.collider) //Mario is on the ground
	{
		

		if ( Input.GetAxis("Vertical") )
		{	
			rigidbody.velocity.y = jumpHeight;
			animatorComponent.SetInteger("state", 1);

		}

	} else //Mario is in the air
	{
		animatorComponent.SetInteger("state", 0);
	}


	if ( transform.position.y < -6 ){ //Fell below world
		Debug.Log("Mario is Dead. Long live the Mario.");
		// transform.position.x = spawn.transform.position.x;
		// transform.position.y = spawn.transform.position.y;
		transform.position = spawn.transform.position;
	}


	

}