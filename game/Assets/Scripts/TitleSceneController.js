#pragma strict

var buttonTexture: Texture2D;
var buttonStyle: GUIStyle;
var buttonSkin: GUISkin;


function OnGUI() {
	GUI.skin = buttonSkin;
	
 	var groupWidth = Screen.width;
    var groupHeight = Screen.height;
     
    var screenWidth = Screen.width;
    var screenHeight = Screen.height;
     
    var groupX = ( screenWidth - groupWidth ) / 2;
    var groupY = ( screenHeight - groupHeight ) / 2;
     
    GUI.BeginGroup( Rect( groupX, groupY, groupWidth, groupHeight ) );
    GUI.Box( Rect( 0, 0, groupWidth, groupHeight ), "Level Select" );
     
    if ( GUI.Button( Rect( 10, 30, 100, 30 ), "PLAY" ) )
    {
        Application.LoadLevel("Level1jell");
    }
    if ( GUI.Button( Rect( 10, 70, 100, 30 ), "HIGH SCORE" ) )
    {
        Application.LoadLevel(2);
    }
    if ( GUI.Button( Rect( 10, 110, 100, 30 ), "SETTINGS" ) )
    {
        Application.LoadLevel(3);
    }
    if ( GUI.Button( Rect( 10, 150, 100, 30 ), "CREDITS" ) )
    {
        Application.LoadLevel(4);
    }

//     
//    GUI.EndGroup();
//	//Button is a method of GUI
//	//It can't just recieve ints, it must recieve a rectangle, dimensions, and text, and styles
//	//This Text can also be a texture
//	var playButton = GUI.Button(Rect(140, 110, 200, 100), playButtonTexture, GUIStyle.none);
//
//	//The way you check to see if somehting has been clicked is truthy or falsey (so a boolean)
//	if(playButton){
//		//Switch scenes with the Global Function Application
//		//Use the name of the LVL, not the Index, because if you put in a new LVL that index may change
//		Application.LoadLevel("Level1jell");
//	}
}