class Food{
    constructor(){
    this.foodStock = 0;
    this.lastFed;
  
   


 
   this.image = loadImage("images/Milk.png");
 
   }
getFoodStock(){
return this.foodStock
}
updateFoodStock(foodStock){
this.foodStock = foodStock;
}
deductFoodStock(){
if(this.foodStock > 0){
    this.foodStock = this.foodStock - 1;
}
} 
getFeedTime(lastFed){
this.lastFed = lastFed;
}
   
   display(){
     var x=80,y=100;


   imageMode(CENTER);
   image(this.image,720,220,70,70);

   if(this.foodStock!=0){
     for(var i =0;i<this.foodStock;i++){
       if(i%10===0){
         x = 80;
         y = y+50;
       }
       image(this.image,x,y,50,50);
       x=x+30;
     }
   }



   }
   bedroom(){
    background("images/Bed Room.png",550,500);
  }
  garden(){
    background("images/Garden.png",550,500);
  }
  washroom(){
    background("images/Wash Room.png",550,500);
  }
   }