#pragma strict

var playButtonTexture:Texture;
var sandButtonTexture:Texture;
function OnGUI() {
	//Button is a method of GUI
	//It can't just recieve ints, it must recieve a rectangle, dimensions, and text, and styles
	//This Text can also be a texture
	var playButton = GUI.Button(Rect(140, 110, 200, 100), playButtonTexture, GUIStyle.none);

	//The way you check to see if somehting has been clicked is truthy or falsey (so a boolean)
	if(playButton){
		//Switch scenes with the Global Function Application
		//Use the name of the LVL, not the Index, because if you put in a new LVL that index may change
		Application.LoadLevel("ColoredLevel1");
	}
	var sandButton = GUI.Button(Rect(140, 600, 200, 100), sandButtonTexture, GUIStyle.none);

	//The way you check to see if somehting has been clicked is truthy or falsey (so a boolean)
	if(sandButton){
		//Switch scenes with the Global Function Application
		//Use the name of the LVL, not the Index, because if you put in a new LVL that index may change
		Application.LoadLevel("SandBox Lvl1");
	}
}