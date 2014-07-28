#pragma strict
var rickyMesh : GameObject;
var rickyAll : GameObject;
var rickyExtents:int;
var rickyOuterPoints:int;
// Debug.Log(gameObject.FindWithTag("rickyMesh"));
function Start () {
	rickyMesh = gameObject.FindWithTag("rickyMesh");
	rickyAll = gameObject.FindWithTag("rickyAll");

	// rickyExtents = rickyMesh.renderer.bounds.extents;
	// rickyOuterPoints = rickyAll.transform.position;




	rickyExtents = parseInt(rickyMesh.renderer.bounds.extents[0]);
	rickyOuterPoints = parseInt(rickyAll.transform.position[0]);
	Debug.Log(rickyExtents);
	Debug.Log(rickyOuterPoints);
	rickyExtents = rickyExtents += rickyOuterPoints;
	Debug.Log(rickyMesh.renderer.bounds);
}

function Update () {

	rickyMesh.renderer.bounds.extents[1];
	rickyMesh.renderer.bounds.extents[2];

	rickyAll.transform.position[1];
	rickyAll.transform.position[2];
}