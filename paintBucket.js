function paintbucketTool() {
    this.icon = "assets/paintBucket.png";
    this.name = "PaintBucket";
  
    var img;
    var targetColor;
    var fillColor;
  
    this.draw = function() {
      if (mouseIsPressed && mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
        if (!img) {
          img = get(0, 0, width, height);
          targetColor = get(mouseX, mouseY);
          fillColor = color(255, 0, 0); // set the fill color to a new color
          floodFill(mouseX, mouseY, targetColor, fillColor);
          background(255);
          image(img, 0, 0);
        }
      } else {
        img = null;
      }
    };
  
    function floodFill(x, y, targetColor, fillColor) {
      if (!colorMatch(get(x, y), targetColor)) {
        return;
      }
      set(x, y, fillColor);
      floodFill(x + 1, y, targetColor, fillColor);
      floodFill(x - 1, y, targetColor, fillColor);
      floodFill(x, y + 1, targetColor, fillColor);
      floodFill(x, y - 1, targetColor, fillColor);
    }
  
    function colorMatch(c1, c2) {
      var tolerance = 10;
      return abs(red(c1) - red(c2)) < tolerance && abs(green(c1) - green(c2)) < tolerance && abs(blue(c1) - blue(c2)) < tolerance;
    }
  }
  