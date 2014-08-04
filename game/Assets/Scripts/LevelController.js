#pragma strict
public var currentScore:int = 0;
public var currentAware:int = 0;

function Start () {

}

function Update () {

}

//Add to Score
function givePoints(p:int) {
	currentScore += p;
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