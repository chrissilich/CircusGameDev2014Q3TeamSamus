#pragma strict

var walkSpeed: int = 5;
var jumpHeight: int = 10;

//var spawn:GameObject;


function Start () {
//	transform.position = spawn.transform.position;

}

// Click To Move script
// Moves the object towards the mouse position on left mouse click
 
var smooth:int; // Determines how quickly object moves towards position
 
private var targetPosition:Vector3;
 
function Update () {
	if(Input.GetKey(KeyCode.Mouse0))
	{
		var playerPlane = new Plane(Vector3.up, transform.position);
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hitdist = 0.0;

		
// 		rigidbody.velocity.x = walkSpeed;

		if (playerPlane.Raycast (ray, hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.rotation = targetRotation;
			transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * .5);
//			Debug.DrawRay(transform.position, targetPosition.forward, Color.green, 1);


		}
	}
}

//function FixedUpdate () {
//
//	var startOfRay = transform.position;
//	startOfRay.y -= 1.4;
//
//	// Debug.DrawRay(startOfRay, -Vector2.up, Color.green, 1);
//
//	var hit:RaycastHit = Physics.Raycast(startOfRay, -Vector2.up, 0.01);
//	var animatorComponent:Animator = this.GetComponent("Animator");
//
//
//
//	if (hit.collider) //Mario is on the ground
//	{
//		
//
//		if ( Input.GetAxis("Vertical") )
//		{	
//			rigidbody.velocity.y = jumpHeight;
//			animatorComponent.SetInteger("state", 1);
//
//		}
//
//	} else //Mario is in the air
//	{
//		animatorComponent.SetInteger("state", 0);
//	}
//
//
//	if ( transform.position.y < -6 ){ //Fell below world
//		Debug.Log("Mario is Dead. Long live the Mario.");
//		// transform.position.x = spawn.transform.position.x;
//		// transform.position.y = spawn.transform.position.y;
//		transform.position = spawn.transform.position;
//	}
//
//
//	
//
//}