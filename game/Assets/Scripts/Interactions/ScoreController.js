﻿#pragma strict
var LevelController:LevelController;

function Start() {
	LevelController = gameObject.Find("LevelController").GetComponent("LevelController");
}


function OnGUI () {
	guiText.text = LevelController.currentTrash.ToString();
}

function Update () {

}