#pragma strict

var walkSpeed: int = 5;
var jumpHeight: int = 10;



function Start () {

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
		} else if(moveX < 50 && moveY >= 50) { //Top Left Quadrant
			//face up and left
			Debug.Log("Top Left");
		} else if(moveX >=50 && moveY < 50) { //Bottom Right Quadrant
			//face down and right
			Debug.Log("Bottom Right");
		} else if (moveX >=50 && moveY >= 50) { //Top Right Quadrant
			//face up and right
			Debug.Log("Top Right");
		}


		

		if (playerPlane.Raycast (ray, hitdist)) {
			var targetPoint = ray.GetPoint(hitdist);
			targetPosition = ray.GetPoint(hitdist);
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.rotation = targetRotation;
			transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * .5);


		}
	}
}