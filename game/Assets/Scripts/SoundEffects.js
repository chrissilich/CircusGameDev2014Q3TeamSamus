var sound : AudioClip;

function Start(){
	audio.Pause();
    audio.clip = sound;
}
 
function Update (){    
    if(Input.GetMouseButtonDown(0)){
    Debug.Log("MOUSE DOWNNNNN.");
        audio.Play();
    }if(Input.GetMouseButtonUp(0)){
    Debug.Log("MOUSE UPPPPPPP.");
        audio.Stop();
    }
}