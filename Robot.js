function setup() {
    createCanvas(500, 500);
    
    nec=new neck();
    
    body=createSprite(0,300,100,150);
    body.shapeColor="yellow";
    //leg=createSprite(body.x,390,100,80);
    

    
    
   
  }
  
  function draw() {
    background(0);
    body.x=World.mouseX;
    ///leg.x=body.x;
    
   nec.downhead();
   fill(255,255,0);
    text("Press UP and DOWN arrow to see the magic",50,100);
     strokeWeight(5);
    
    stroke(255,255,0);
    
    line(mouseX,100,mouseX,300);
    nec.display();
    drawSprites();
    
  }
