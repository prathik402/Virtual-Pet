//Create variables here
var dog, dogImg 
var happyDogImg
var database
var milk, milkImg
var foodS
var foodStock
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
  
}


function setup() {
	createCanvas(500, 500);
 dog = createSprite(300,300,10,10);
 dog.addImage(dogImg);
 dog.scale = 0.4;
 database = firebase.database();
 foodStock = database.ref("Food");
 foodStock.on("value",readStock);

 feed=createButton("Feed the dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);
 if(gameState!="Hungry"){
   feed.hide();
   addFood.hide();
   dog.remove();
 }else{
   feed.show();
   addFood.show();
   dog.addImage("images/sadDog.png");

 }

 addFood = createButton("Add food");
 addFood.position(800,95);
 addFood.mousePressed(foodStock = foodStock + 1);
 readState=database.ref("gameState");
 readState.on("value",function(data){
 gameState=data.val();
 });
}

function draw() {  
background(46, 139, 87);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : " + lastFed%12 + " PM" ,350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed : "+ lastFed + "AM",350,30);
}


currentTime=hour();
if(currentTime===(lastFed+1)){
  update("Playing");
  foodObj.garden();
}else if(currentTime===(lastFed+2)){
  update("Sleeping")
  foodObj.bedroom()
}else if(currentTime>(lastFed+2)&& currentTime<=(lastFed+4)){
  update("Bathing");
  foodObj.washroom();
}else{
  update("Hungry");
  foodObj.display();
}


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImg);
}


  drawSprites();
  //add styles here
 
  
}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
database.ref("/").update({
  Food:x

})
if(x <= 0){
  x = 0
}
else{
  x = x - 1
}
}
function feedDog(){
  dog.addImage(happyDogImg)

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
  })
}
function update(state){
  database.ref("/").update({
    gameState:state
  });
}


