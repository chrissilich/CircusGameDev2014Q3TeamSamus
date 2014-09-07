#pragma strict

var walkSpeed: int = 5;
var jumpHeight: int = 10;

var animatorComponent:Animator;


/* ricky animation

state
0: idle
1: walking
2: in trash
3: ?

direction
1: toward
2: away

*/


function Start () {
	animatorComponent = this.GetComponent("Animator");
	Debug.Log(animatorComponent);
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

		//Setup Quadrants for Ricky Image Change
		var moveX = Mathf.Round(Input.mousePosition.x/Camera.main.pixelWidth*100);
		var moveY = Mathf.Round(Input.mousePosition.y/Camera.main.pixelHeight*100);
		// Debug.Log("X = " + moveX);
		// Debug.Log("Y = " + moveY);
		if(moveX < 50 && moveY <50){ //Bottom Left Quadrant
			//face down and left
			Debug.Log("Bottom Left");
			animatorComponent.SetInteger("direction", 1);
			transform.rotation.y = 0.7075;

		} else if(moveX < 50 && moveY >= 50) { //Top Left Quadrant
			//face up and left
			Debug.Log("Top Left");
			animatorComponent.SetInteger("direction", 2);
			transform.rotation.y = 0.7075;

		} else if(moveX >=50 && moveY < 50) { //Bottom Right Quadrant
			//face down and right
			Debug.Log("Bottom Right");
			animatorComponent.SetInteger("direction", 1);
			transform.rotation.y = -0.7075;
		} else if (moveX >=50 && moveY >= 50) { //Top Right Quadrant
			//face up and right
			Debug.Log("Top Right");
			animatorComponent.SetInteger("direction", 2);
			transform.rotation.y = -0.7075;

		}


		

		if (playerPlane.Raycast (ray, hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * .5);

			Debug.Log("ricky is moving");
			animatorComponent.SetInteger("state", 1);

		}
	} else {
		Debug.Log("ricky not moving");
		animatorComponent.SetInteger("state", 0);
	}
}