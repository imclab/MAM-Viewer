private var showList = false;
private var listEntry = 0;
private var list : GUIContent[];
public var listStyle : GUIStyle;
private var picked = false;
public var style1:GUIStyle;
function Start () {
	// Make some content for the popup list
	list = new GUIContent[3];
	list[0] = new GUIContent("1.Board Assembling");
	list[1] = new GUIContent("2.Wing Adjustment");
	list[2] = new GUIContent("3.Landing Gear Fixing");
	
 
	// Make a GUIStyle that has a solid white hover/onHover background to indicate highlighted items
	listStyle = new GUIStyle();
	listStyle.normal.textColor = Color.white;
	var tex = new Texture2D(2, 2);
	var colors = new Color[4];
	for (color in colors) color = Color.white;
	tex.SetPixels(colors);
	tex.Apply();
	listStyle.hover.background = tex;
	listStyle.onHover.background = tex;
	listStyle.padding.left = listStyle.padding.right = listStyle.padding.top = listStyle.padding.bottom = 4;
}
 
function OnGUI () {
	if (Popup.List (Rect(57, 303, 545, 73), showList, listEntry, GUIContent(""), list, style1)) {
		picked = true;
	}
	if (picked) {
	
		GUI.Label (Rect(565, 91, 400, 33),list[listEntry].text ,style1);
		
	}
	if(GUI.Button(Rect(1090,55,190,500),"",style1))
{
Application.LoadLevel (2);
}
}