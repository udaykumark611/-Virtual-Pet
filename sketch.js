var dog;
var happyDog;
var database;
var foodS,feed;
var foodStock;
var dogImg, happydogImg;

function preload()
{
 dogImg = loadImage("sprites/dogImg.png");
 happydogImg = loadImage("sprites/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  console.log(database);





  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
  { background(46,139,87);
    foodobject.display()
    
    }


  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImg);
  }
  

  drawSprites();
  textSize(17);
  fill("black");
  stroketext("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 


  function readStock(data){
    foodS = data.val();
  }
  

    function writeStock(x){


      if(x<=0){
        x = 0;
      }else{
        x=x-1
      }



      database.ref('/').update({
        food:x
      }

      )
    }

  

}



