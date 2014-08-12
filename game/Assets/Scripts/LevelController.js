#pragma strict
public var currentTrash:int = 0;
public var currentAware:int = 0;

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