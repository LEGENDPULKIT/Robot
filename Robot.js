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
    
    
     strokeWeight(20);
    fill(255,255,0);
    text("Press UP and DOWN arrow to see the magic",50,100);
    //line(nec.postion.x,nec.postion.y,body.position.x,body.position.y);
    nec.display();
    drawSprites();
    
  }