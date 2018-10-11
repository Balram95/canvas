var canvas= document.getElementById('canvas');
var w= window.innerWidth;
var h= window.innerHeight;
canvas.width=w;
canvas.height=h;


var ctx = canvas.getContext('2d');

ctx.font="20px Georgia";

var mouse ={
  x:null,
  y:null
}

window.addEventListener('mousemove',(event)=>{
  mouse.x=event.x;
  mouse.y=event.y
})

function Words(x,y,value){
  this.x=x;
  this.y=y;
  this.value=value;

  this.draw=function(){
    ctx.fillText(this.value,this.x,this.y);
  }

  this.update=function(){

    // set velocity according to mouse position
    this.dx=(mouse.x-w/2)/70;
    this.dy=(mouse.y-h/2)/70;

    this.x+=this.dx
    this.y+=this.dy
    this.draw();
  }
}

var node=new Words(w/2,h/2,'Node');
function animate(){
requestAnimationFrame(animate);
  ctx.clearRect(0,0,w,h);
  node.update();
}
animate();
