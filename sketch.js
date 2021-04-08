var canvas //backgroundImage;

var gameState = 0;
var astronautCount;
var allastronauts;
var distance = 0;
var database;

var form, astronaut, game;

var astrs, astr1, astr2, astr3, astr4;

var shipimg
function preload()
{
startIMG=loadImage("space.jpg")
astr1img=loadImage("astr1.png")
astr2img  =loadImage("astr2.png")
astr3img  =loadImage("astr3.png")
astr4img  =loadImage("astr4.png")
moonIMG=loadImage("refer.JPG")
up=loadImage("up.png")
shipimg=loadImage("shuttle.png")
result=loadImage("result.jpg")


}

function setup() {
	canvas=createCanvas(windowWidth, windowHeight);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
  

  
	
  
}


function draw(){
	

  if(gameState===0){
    background(startIMG)
    
   }
   

  if(astronautCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    background(moonIMG)
   game.play();
  
   
  }



 
 
}



