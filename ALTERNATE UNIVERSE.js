var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune
var m1,m2,m3,m4,m5,m6,m7,m8;

var bg

function preload()
{
    m1=loadImage("Planets/1.png");
    m2=loadImage("Planets/8.png");
    m3=loadImage("Planets/2.png");
    m4=loadImage("Planets/3.png");
    m5=loadImage("Planets/4.png");
    m6=loadImage("Planets/5.png");
    m7=loadImage("Planets/6.png");
    m8=loadImage("Planets/7.png");
    bg=loadImage("Planets/solar.jpg");



}


function setup()
{
    createCanvas(1200,800);

    mercury=createSprite(450,200,20,20);
    mercury.addImage(m1);
    mercury.scale=0.15;

    venus=createSprite(165,420,20);
    venus.addImage(m2);
    venus.scale=0.10;
    
    earth=createSprite(560,340,20);
    earth.addImage(m8);
    earth.scale=0.55;
    
    mars=createSprite(740,110,20);
    mars.addImage(m7);
    mars.scale=0.10;
    
    jupiter=createSprite(840,300,20,100);
    jupiter.addImage(m6);
    jupiter.scale=0.28;
    
    saturn=createSprite(540,650,20);
    saturn.addImage(m5);
    saturn.scale=0.9;
    
    uranus=createSprite(1070,460,20);
    uranus.addImage(m4);
    uranus.scale=0.29;
    
    neptune=createSprite(980,670,20);
    neptune.addImage(m3);
    neptune.scale=0.20;
    
    
}

function draw()
{
    background(bg);

    drawSprites();
}