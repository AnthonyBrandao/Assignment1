var flapperJacks = function (aNumber) {
  var result;
  
    console.log(result)
};

function setup() {
  createCanvas(500,500);
  flapperJacks=30;
}

function draw() {
  background(150);
  
  for (var x = 0; x < flapperJacks; x++){
    if (x>flapperJacks){
      break;
    }
 else if (x%3==0 && x%5==0){
      console.log("flapjack")
       }
       else if (x%3 == 0){
      console.log("flap")
       } else if (x%5 == 0){
      console.log("jacks")
    }
    else 
    console.log(x)
  }
  
 
  }
    
  //please work
    
  
  


