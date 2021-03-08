var containerEle = document.body.querySelector(".dragon");
var p=0;
var dr=0;
while (p < 5 && dr < 10) {
var d=Number(prompt("How much damage would you like to deal?"));
var r=Math.floor(Math.random() * 2) + 1;
d = Math.floor(Math.random() * d) + 1;
if (d > 5) {
   d = 1;
}
dr = dr + d;
p = p + r;
}
if (dr > 9) {
   var result = "You slayed the dragon!";
}else {
   var result = "You lose!";}
  document.body.querySelector(".dragon").innerHTML = result;