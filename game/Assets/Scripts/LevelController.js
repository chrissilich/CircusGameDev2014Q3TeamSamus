#pragma strict
public var currentTrash:int = 0;
public var currentAware:int = 0;
public var cachedTrash:int = 0;
public var totalScore:int = 0;
public var totalNormal:int = 0;
public var totalLocked:int = 0;

function Start () {

}

function Update () {

}

//Add to Trash
function giveTrash(p:int) {
	currentTrash += p;
}


//Awareness
//Add to Awareness
function giveAware(p:int) {
	currentAware += p;
}


//Subtract from Awareness
function takeAware(p:int) {
	currentAware -= p;
}

//Store Trash
function storeTrash() {
	cachedTrash += currentTrash;
	Debug.Log("cachedTrash = " + cachedTrash);
}

function pickUpTrash() {
	currentTrash += cachedTrash;
}

function giveScore(type) {
	if(type == "normal") {
		totalNormal = totalNormal +1;
		totalScore = totalScore +100;
		Debug.Log("Normal = " + totalNormal + " and Score = " + totalScore);
	} else if(type == "locked") {
		totalLocked = totalLocked +1;
		totalScore = totalScore +500;
		Debug.Log("Normal = " + totalNormal + " and Score = " + totalScore);

	}
}