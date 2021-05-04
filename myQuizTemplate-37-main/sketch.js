var canvas;
var gameState=0
var contestantCount,database,Quiz,question,contestant


function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  Quiz=new quiz();
  Quiz.getState();
  Quiz.start();

}


function draw(){
  background("pink");
if(contestantCount=== 2){
  Quiz.update(1);
}
  
}
