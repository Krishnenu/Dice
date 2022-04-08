var randomNumber1=Math.floor((Math.random()*6)+1);//1-6
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor((Math.random()*6)+1);//1-6
var randomDiceImage="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomDiceImage;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player1 Wins";
}else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Player2 Wins";
}else{
document.querySelector("h1").innerHTML="Draw";
}