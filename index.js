var r=Math.floor(Math.random()*6)+1;
var random_image="images/dice"+r+".png";
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",random_image);

var r1=Math.floor(Math.random()*6)+1;
var random_image1="images/dice"+r1+".png";
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",random_image1);

if(r>r1)
document.querySelector("h1").innerHTML="🏆Player 1 Wins!";
else if(r<r1)
document.querySelector("h1").innerHTML="Player 2 Wins!🏆";
else
document.querySelector("h1").innerHTML="🏆Draw!!🏆";

