#pragma strict

function Start () {

}

function Update () {
 
        for(var touch : Touch in Input.touches) {
if(touch.phase == TouchPhase.Began) {
    Debug.Log("Touched...");
 
 
    var curX = Input.GetTouch(0).position.x;
    var curY = Input.GetTouch(0).position.y;
 
    //transform.Translate = Camera.main.ScreenToWorldPoint(new Vector3 (curX, curY, 1000));
    transform.position = Camera.main.ScreenToWorldPoint(new Vector3 (curX, curY, 15));
 
} 
}
  }      