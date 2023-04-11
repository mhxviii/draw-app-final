function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	//these are global variables that have been created so that they can be called on later in the program


	this.draw = function(){

		if(mouseIsPressed){
			//this if statement is for when the user begins drawing, the starting point is at the X and Y coordinates of their mouse as
			//seen with the mouseX and mouseY cmds.
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
				//this function loads the pixel info to the pixel array, commenting it out only allows for 1 line on the canvas at once.
			}

			else{
				updatePixels();
				//this function updates the canvas with the pixel data received from loadPixels(), commenting it out creates multiple 
				//lines on the canvas at once which stops when the user lets go of their left click on the mouse.
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
