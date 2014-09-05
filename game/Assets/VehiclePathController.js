#pragma strict
public var frozenMode:boolean = false;
public var velocity:float = 5;;
private var currentPosX:float;
private var currentPosZ:float;
private var newPosX:float;
private var newPosZ:float;
private var direction:int = 2;
private var startingPositionX = 281;
private var startingPositionZ = 196;
private var vehicleRotY;


function Start () {
	if(frozenMode) {
		return;
	}
	this.transform.position.x = startingPositionX;
	this.transform.position.z = startingPositionZ;
	vehicleRotY = this.transform.rotation.y;
	Debug.Log(vehicleRotY);
}


function FixedUpdate () {
	//Debug.Log(direction);
	if(direction == 1) {
		//Set necessary variables
		this.transform.rotation.y = -0.7;
		currentPosX = transform.position.x;
		//Make vehicle move in the X direction (Up a vertical road)
		newPosX = currentPosX+velocity;
		transform.position.x = newPosX;
	} else if (direction == 2) {
		//Set necessary variables
		this.transform.rotation.y = 0;
		currentPosZ = transform.position.z;
		//Make vehicle move in the Z direction (across top road) from left to right
		newPosZ = currentPosZ-velocity;
		transform.position.z = newPosZ;
	} else if (direction == 3) {
		//Set necessary variables
		this.transform.rotation.y = 0.7;
		currentPosX = transform.position.x;
		//Make vehicle move in the X direction (Down a vertical road)
		newPosX = currentPosX-velocity;
		transform.position.x = newPosX;
	} else if (direction == 4) {
		//Set necessary variables
		this.transform.rotation.y = 1;
		currentPosZ = transform.position.z;
		//Make vehicle move in the Z direction (across top road) from right to left
		newPosZ = currentPosZ + velocity;
		transform.position.z = newPosZ;
	} else {
		Debug.Log("Something went wrong");
	}
}