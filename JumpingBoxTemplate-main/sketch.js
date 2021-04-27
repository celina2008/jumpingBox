var canvas;
var music;
var block1
var block2
var block3
var ball
var block4
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,570,300,20)
block1.shapeColor=rgb(255,0,0)
block2=createSprite(310,570,250,20)
block2.shapeColor=rgb(0,255,0)
block3=createSprite(570,570,250,20)
block3.shapeColor=rgb(0,0,255)
block4=createSprite(750,570,250,20)
block4.shapeColor=rgb(0,0,90)
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=4
ball.velocityY=4
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
if(block1.isTouching(ball) && ball.bounceOff(block1) ){
    ball.shapeColor=rgb(255,0,0)
    music.play()
    
}
if(block2.isTouching(ball)){
    ball.shapeColor=rgb(0,255,0)
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
}
if(block3.isTouching(ball) && ball.bounceOff(block3) ){
    ball.shapeColor=rgb(0,0,255)

    
    
}
if(block4.isTouching(ball) && ball.bounceOff(block4) ){
    ball.shapeColor=rgb(0,0,90)
}

drawSprites()


    //add condition to check if box touching surface and make it box
}
