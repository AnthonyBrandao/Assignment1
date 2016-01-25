function setup() {
  createCanvas(500,500);
}

function draw() {
  background(150);
  strokeWeight(4);
  stroke(255);
  
  for (var x = 0;  x <= width;  x +=60) {
    for (var y = 0; y <=height; y +=40){
    fill(1, x, 255);
    ellipse(x, y, 25, 25);
    rect(x, (y+5), 20, 15);
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
}
  
}