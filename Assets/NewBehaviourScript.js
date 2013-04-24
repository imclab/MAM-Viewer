/* Example level loader */


// JavaScript


var myCheck:boolean=true;


function OnGUI () {
	// Make a background box
	if(Input.GetMouseButtonDown(0))
	{
	  if(myCheck)
	  {
	     myCheck=false;
	  }
	  if(!myCheck)
	  {
	     myCheck=true;
	  }
	}
	if(myCheck)
	{GUI.Box (Rect (10,10,200,200), "");
	

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,20,180,180), "Back")) {
	
		Application.LoadLevel (2);
	}

	
	
}}