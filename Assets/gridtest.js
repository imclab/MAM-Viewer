var speed : float = 5;
function Update () {

for(var touch : Touch in Input.touches) {
    for(var i:int = 0; i < Input.touches.Length; i++)//How many touches do we have?
    {
        var touch:Touch = Input.touches[i];//The touch
        var touchPos3D:Vector3 = Camera.main.ScreenToWorldPoint(Vector3(touch.position.x, touch.position.y, Camera.main.nearClipPlane)); 
        this.transform.localPosition.x = touchPos3D.x;
    if(transform.position.x >= 166.0165){

        transform.position.x = 166.0165;

    }

    if(transform.position.x <= -164.0203){

        transform.position.x = -164.0203;

    }
    }
}
}
 
  