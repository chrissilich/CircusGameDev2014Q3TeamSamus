#pragma strict
 
///    
///    SmoothFollow:
///        Follows the target's position while applying damping to prevent jittering
///        and immediate moving of the camera.This way every subtle movement doesn't become
///        noticeable. The camera follows from a set distance away from the character and always
///        tries to center the view on the target.
///
 
// public fields
var target : Transform;                    // the target camera is following
var dampTime : float = 0.3;             // offset from the viewport center to fix damping
var distance : float = 10;              // distance away on z axis from the target
 
// private fields
private var _velocity = Vector3.zero;   // velocity of camera relative to target
 
/// 
///    Update:
///        Makes sure that the camera is always focused on the target, 
///        after applying damping.
///
function Update() {
	target = gameObject.Find("Ricky").GetComponent("Transform");
    if(target) {
        // calculate the difference between camera and target positions
        var delta : Vector3 = target.position - camera.ViewportToWorldPoint(Vector3(0.5, 0.5, distance));
 
        // calculate destination of the camera based on the difference in positions
        var destination : Vector3 = transform.position + delta;
 
        // apply the new position through dampening to provide smooth movement
        transform.position = Vector3.SmoothDamp(transform.position, destination, _velocity, dampTime);
    }
} // eo Update