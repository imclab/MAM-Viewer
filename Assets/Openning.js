#pragma strict
var btnTexture : Texture;
var btnStyle: GUIStyle;
function Start () {

}

function OnGUI () {

if(GUI.Button(Rect(985,263,300,188),"",btnStyle))
{
Application.LoadLevel (1);
}

}