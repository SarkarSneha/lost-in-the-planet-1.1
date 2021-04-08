class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        
        astronaut = new Astronaut();
        var astronautCountRef = await database.ref('astronautCount').once("value");
        if(astronautCountRef.exists()){
          astronautCount = astronautCountRef.val();
          astronaut.getCount();
        }
        form = new Form()
    form.display();
    console.log("form")
      }
      astr1 = createSprite(100,displayHeight-200);
      astr1.addImage( astr1img)
       astr2 = createSprite(300,displayHeight-200);
       astr2.addImage( astr2img)
       astr3 = createSprite(500,displayHeight-200);
       astr3.addImage( astr3img)
       astr4 = createSprite(700,displayHeight-200);
       astr4.addImage( astr4img)
       astrs = [astr1, astr2, astr3, astr4];
    
    
    }
  
    play(){
      form.hide();
      var ship=createSprite(displayWidth/2,-3132-100,40,40)
      ship.addImage(shipimg)
    
      Astronaut.getastronautInfo();
      
      if(allastronauts !== undefined){
        //var display_position = 100;
        //background(up)
        image(moonIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
        //index of the array
        var index = 0;
  
        //x and y position of the astrs
        var x = 175;
        var y;
  
        for(var plr in allastronauts){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the astrs a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the astrs in y direction
          y = displayHeight - allastronauts[plr].distance;
          astrs[index-1].x = x;
          astrs[index-1].y = y;
  
          if (index === astronaut.index){
            astrs[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = astrs[index-1].y
          }
         
          //textSize(15);
          
         //text(allastronauts[plr].name + ": " + allastronauts[plr].distance, 120,display_position)
        }

  
      }
  
      if(keyIsDown(UP_ARROW) && astronaut.index !== null){
        astronaut.y +=10
        astronaut.update();
       console.log(astr1.y)
      }

      if(keyIsDown(RIGHT_ARROW) && astronaut.index !== null){
      astronaut.x+=10
       astronaut.update();
      }
      
     // if(astronaut.distance>3600){
      ///  game.update(2)
       // background(result)
     // }
 
      drawSprites();
    }
  }
  
