var zoom : int = 5;
var normal : int = 60;
var smooth : float = 5;
var btnStyle: GUIStyle;
var il: int=0;
var obj1:GameObject;

function OnGUI () {

GUI.Box(Rect(1080,0,250,720),"Menu");
     if(GUI.Button(Rect(1080,50,200,100),"Zoom In")){
     
     
      camera.fieldOfView=camera.fieldOfView-5;}
        
         
     
      if(GUI.Button(Rect(1080,170,200,100),"Zoom Out"))
     
        { camera.fieldOfView=camera.fieldOfView+5;
         
     }
  if(GUI.Button(Rect(1080,290,200,100),"AR"))
     
        { Application.LoadLevel(3);
         
     }
     if(GUI.Button(Rect(1080,410,200,50),"Up"))
     
        { 
         
     }
    
    if(GUI.Button(Rect(1080,460,100,50),"Left"))
     
        { 
         
     }
    
    if(GUI.Button(Rect(1180,460,100,50),"Right"))
     
        { 
         
     }
    
    if(GUI.Button(Rect(1080,510,200,50),"Down"))
     
        { 
         
     }
    
    if(GUI.Button(Rect(1080,580,200,100),"Exit"))
     
        { 
         
     }
    
    GUI.Box(Rect(0,620,1080,100),"");
     if(GUI.Button(Rect(10,620,250,100),"Start"))
     
        { var renderers1 = obj1.GetComponentsInChildren(Renderer);
for (var r : Renderer in renderers1) {
    if (r.CompareTag("screw1")) {
        r.enabled = false;
    }
    if (r.CompareTag("screw2")) {
        r.enabled = false;
    }
    if (r.CompareTag("screw3")) {
        r.enabled = false;
    }
    if (r.CompareTag("screw4")) {
        r.enabled = false;
    }
}
il=0;
         
     }
 
 
 if(GUI.Button(Rect(280,620,250,100),"Previous"))
     
{ 
         var renderers = obj1.GetComponentsInChildren(Renderer);

if(il==1)
{
                      
    for ( var r : Renderer in renderers) {
        if (r.CompareTag("screw1")) {
            r.enabled = false;
    }
if (r.CompareTag("screw2")) {
    r.enabled = false;
}
if (r.CompareTag("screw3")) {
    r.enabled =false;
}
if (r.CompareTag("screw4")) {
    r.enabled = false;
}
}
il=il-1;
}
if(il==2)
{
                      
    for ( var r : Renderer in renderers) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = false;
}
if (r.CompareTag("screw3")) {
    r.enabled =false;
}
if (r.CompareTag("screw4")) {
    r.enabled = false;
}
}
il=il-1;
}
if(il==3)
{
                      
    for ( var r : Renderer in renderers) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = true;
}
if (r.CompareTag("screw3")) {
    r.enabled =false;
}
if (r.CompareTag("screw4")) {
    r.enabled =false;
}
}
il=il-1;
}
  
                
     
if(il==4)
{
                      
    for ( var r : Renderer in renderers) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = true;
}
if (r.CompareTag("screw3")) {
    r.enabled =true;
}
if (r.CompareTag("screw4")) {
    r.enabled = false;
}
}
il=il-1;
}
         
     }
     
     
     
      if(GUI.Button(Rect(550,620,250,100),"Next"))
     
{ 
         var renderers2 = obj1.GetComponentsInChildren(Renderer);

if(il==3)
{
                      
    for ( var r : Renderer in renderers2) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = true;
}
if (r.CompareTag("screw3")) {
    r.enabled =true;
}
if (r.CompareTag("screw4")) {
    r.enabled = true;
}
}
il=il+1;
}
if(il==2)
{
                      
    for ( var r : Renderer in renderers2) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = true;
}
if (r.CompareTag("screw3")) {
    r.enabled =true;
}
if (r.CompareTag("screw4")) {
    r.enabled = false;
}
}
il=il+1;
}
if(il==1)
{
                      
    for ( var r : Renderer in renderers2) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = true;
}
if (r.CompareTag("screw3")) {
    r.enabled =false;
}
if (r.CompareTag("screw4")) {
    r.enabled =false;
}
}
il=il+1;
}
  
                
     
if(il==0)
{
                      
    for ( var r : Renderer in renderers2) {
        if (r.CompareTag("screw1")) {
            r.enabled = true;
    }
if (r.CompareTag("screw2")) {
    r.enabled = false;
}
if (r.CompareTag("screw3")) {
    r.enabled =false;
}
if (r.CompareTag("screw4")) {
    r.enabled = false;
}
}
il=il+1;
}
         
     }
     
     
  
         
      if(GUI.Button(Rect(820,620,250,100),"Video"))
     
        { 
         Handheld.PlayFullScreenMovie ("123.mp4", Color.black, FullScreenMovieControlMode.CancelOnInput);
     }
     }
     
     
    
     
