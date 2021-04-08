class Astronaut {
    constructor(){
      this.index = null;
      this.x = 0;
      this.y=0
      this.name = null;
    }
  
    getCount(){
      var astronautCountRef = database.ref('astronautCount');
      astronautCountRef.on("value",(data)=>{
        astronautCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        astronautCount: count
      });
    }
  
    update(){
      var astronautIndex = "astronauts/astronaut" + this.index;
      database.ref(astronautIndex).set({
        name:this.name,
        x:this.x,
       y:this.y
      
});
    }
  
    static getastronautInfo(){
      var astronautInfoRef = database.ref('astronauts');
      astronautInfoRef.on("value",(data)=>{
        allastronauts = data.val();
      })
    }
  }