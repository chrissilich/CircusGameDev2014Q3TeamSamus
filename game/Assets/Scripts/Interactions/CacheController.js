#pragma strict
private var cache:GameObject;

function Start () {
	cache = gameObject.Find("CacheModal");
	cache.SetActive(false);
}


function Update () {
}


private var cacheTriggered:boolean = false;
private var timeSinceCache:int = 0;

function OnTriggerEnter() {
	if(!cacheTriggered) {
		Debug.Log("Cache Open");
		cache.SetActive(true);
	} else {
		//do nothing, it hasn't been 10 secs since they left, 
		//so this is probably not a trip to actually drop off trash,
		//the player probably just accidentally went back into the
		//collider and doesn't actually want to see the cache modal.
	}
}
function OnTriggerExit() {
	if(!cacheTriggered) {
		Debug.Log("Cache Close");
		cacheTriggered = true;
		InvokeRepeating("cacheTimer", 0.1, 1);
	} else {
		//do nothing, it hasn't been 10 secs since they left, 
		//so this is probably not a trip to actually drop off trash,
		//the player probably just accidentally went back into the
		//collider and doesn't actually want to see the cache modal.
	}
}

function cacheTimer () {
	if(timeSinceCache <=8) {
		timeSinceCache++;
	} else{
		timeSinceCache = 0;
		cacheTriggered = false;
		CancelInvoke("cacheTimer");
	}
}

function closeCacheModal() {
	cache.SetActive(false);
}