class Food{
    constructor(foodStock,lastfed){
    var options = {
   isStatic: true,
   restitution: 0,
   friction: 1
    }

   
   

   this.body = Bodies.rectangle(x,y,width,height,options);
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
   this.image = loadImage("images/Milk.png");
   World.add(world, this.body);
   }
     
   
   display(){
       var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
       imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop()
   }
   
   }