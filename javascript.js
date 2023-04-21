
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext('2d');
 
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;

 
var angle = 0;
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

                            

//Shrink and grow moon, I couldn't figure out how to do the light thing
function drawCircle() {
    mainContext.clearRect(200, -300, 332, 325);
     
     
    mainContext.beginPath();
     
    var radius = 50 + 50 * Math.abs(Math.cos(angle));
    mainContext.arc(400, -100, radius, 0, Math.PI * 2, false);

    mainContext.closePath();
     
    mainContext.fillStyle = "white";
    mainContext.fill();
      
    angle += Math.PI / 2000;
     
    requestAnimationFrame(drawCircle);
}

//flashing star on the left of the screen
window.onload=function(){
    function animate() {
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.save();
        ctx.clearRect(154, 124, 30, 30);
        if(i > 80) {
            i = 1;
        }
        if( i > 40) {
            ctx.beginPath();
            ctx.arc(170, 140, 10, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = "white";
            ctx.fill();
        }
        i++;
        ctx.restore();
        setTimeout(animate, 10);
    }
    var i = 0;
    animate();
}


//a static moon
drawCircle();

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(170, 150, 115, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

//ground plus person, the code for them is here
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "black";
ctx.rect(0, 600, 1480, 150);
ctx.fillStyle = "black";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(700, 470, 65, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "black";
ctx.rect(668, 500, 65, 150);
ctx.fillStyle = "black";
ctx.fill();

var rect={ x:645, y:500, width:30, height:150 };

ctx.translate( rect.x+rect.width/2, rect.y+rect.height/2 );
ctx.rotate( Math.PI/7);
ctx.translate( -rect.x-rect.width/2, -rect.y-rect.height/2 );
ctx.fillRect( rect.x, rect.y, rect.width, rect.height );

var rect={ x:730, y:460, width:30, height:180 };
ctx.translate( rect.x+rect.width/2, rect.y+rect.height/2 );
ctx.rotate( Math.PI/-3.5);
ctx.translate( -rect.x-rect.width/2, -rect.y-rect.height/2 );
ctx.fillRect( rect.x, rect.y, rect.width, rect.height );


//this is the thing needed for creating the stars, I don't know what I did for this to happen
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(0, 0.0);
ctx.closePath();
ctx.fill();

//this is the code to create the 'stars', it's a bit offset though
canvas.addEventListener("click", function(event){
let x = event.offsetX;
let y = event.offsetY;

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(x, y, 7, 0, Math.PI*2)
ctx.fill();
})


}
