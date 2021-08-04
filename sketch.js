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
}

function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImg);
}


  drawSprites();
  //add styles here
  textSize(17)
  stroke("red")
  text("Note: Press UP ARROW key to feed the dog milk", 100, 50)
  
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


