var canvas=document.getElementById('canvas')
var points=[]
var ctx=canvas.getContext('2d')
var w=window.innerWidth;
var h=window.innerHeight;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var xPosition,yPosition;
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();
function Point(x,y,r,dx,dy){
  this.x=x;
  this.y=y;
  this.r=r;
  this.dx=dx;
  this.dy=dy;


  this.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  }
  this.update=function(){
    for (var i = 0; i < numm; i++) {

      var myX=Math.abs(points[i].x-this.x);
      var myY=Math.abs(points[i].y-this.y);

      if(myX<70&&myY<70){
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.strokeStyle = "white";
        if(myX<myY){
          ctx.globalAlpha=myX/70
        }
        else{
          ctx.globalAlpha=myY/70
        }
        ctx.stroke();
      }
    }

    // this.x=this.x-xPosition
    // this.y=this.y-xPosition
    if(this.x>w||this.y<0){
      this.dx=-this.dx
    }
    if(this.y>h||this.y<0){
      this.dy=-this.dy
    }

    this.x+=this.dx;
    this.y+=this.dy;

    if(Math.abs(this.x-xPosition)<50){
      this.x-=this.dx;
      this.y-=this.dy;
    }
    this.draw();
  }

}

var numm=150;

for (var i = 0; i < numm; i++) {
  points[i]=new Point(Math.random()*w,Math.random()*h,1,Math.random()*1-.5,Math.random()*1-.5)
}


window.addEventListener('mousemove',(e) => {
  xPosition=e.clientX;
  yPosition=e.clientY;
})

function animate(){
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,w,h)
  for (var i = 0; i < numm; i++) {
    points[i].update();
  }
}
animate();
