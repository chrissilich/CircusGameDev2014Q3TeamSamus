#pragma strict

var animatorComponent:Animator;
static var inCan = false;

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
	// Debug.Log(animatorComponent);

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
			animatorComponent.SetInteger("direction", 1);
			transform.rotation.y = 0.7075;

		} else if(moveX < 50 && moveY >= 50) { //Top Left Quadrant
			//face up and left
			animatorComponent.SetInteger("direction", 2);
			transform.rotation.y = 0.7075;

		} else if(moveX >=50 && moveY < 50) { //Bottom Right Quadrant
			//face down and right
			animatorComponent.SetInteger("direction", 1);
			transform.rotation.y = -0.7075;
		} else if (moveX >=50 && moveY >= 50) { //Top Right Quadrant
			//face up and right
			animatorComponent.SetInteger("direction", 2);
			transform.rotation.y = -0.7075;

		}




		

		if (playerPlane.Raycast (ray, hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * .5);

			// Debug.Log("ricky is moving");
			animatorComponent.SetInteger("state", 1);

		}
	} else if(inCan){
		animatorComponent.SetInteger("state", 2);
	} else {
		animatorComponent.SetInteger("state", 0);
	}
}

function outOfCan() {
	Debug.Log("out of can");
	animatorComponent.SetInteger("state", 0);
}

function inACan() {
	//Freeze Position with rigidbody.constraints
	// Debug.Log("ricky should freeze");
}

//<<<<<<< HEAD


//=======
// var maxVel: float = 10.0; // max absolute velocity

// function FixedUpdate(){
// 	rigidbody.velocity = Vector3.ClampMagnitude(rigidbody.velocity, maxVel);
// }
//>>>>>>> FETCH_HEAD
