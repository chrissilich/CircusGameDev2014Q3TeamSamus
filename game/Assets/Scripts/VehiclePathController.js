#pragma strict
public var frozenMode:boolean = false;
public var velocity:float = 5;;
private var currentPosX:float;
private var currentPosZ:float;
private var newPosX:float;
private var newPosZ:float;
public var direction:int = 2;
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
}


function FixedUpdate () {
	Debug.Log(direction);
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


var truckTriggered = false;
var leftCross = false;
function OnTriggerEnter(other: Collider) {
	if (!truckTriggered) {
		//Run random direction for three way stops
		if(other.gameObject.tag == "Cross1") {
			var newDirection:int;
			newDirection = Mathf.Round(Random.Range(1, 3));
			Debug.Log("random num is "+newDirection);
			direction = newDirection;
			Debug.Log(direction);
		} else if(other.gameObject.tag == "Cross2") {
			direction = 1;
		} else if(other.gameObject.tag == "Cross3") {
			direction = 4;
		} else if(other.gameObject.tag == "Cross4") {
			direction = 2;
		}
		truckTriggered = true;
	} else {
		//do nothing
	}
}

function OnTriggerExit() {
	if(!leftCross) {
		Debug.Log("leaving cross");

		leftCross = true;
	}
}










