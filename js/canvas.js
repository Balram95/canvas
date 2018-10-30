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
    for (var i = 0; i < 50; i++) {
      if((Math.abs(points[i].x-this.x<100))&&(Math.abs(points[i].y-this.y<100))){
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.strokeStyle = "white";
        ctx.globalAlpha=(100/(Math.abs(points[i].x-this.x))+(100/Math.abs(points[i].y-this.y)))/7;
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
    this.draw();
  }

}

for (var i = 0; i < 50; i++) {
  points[i]=new Point(Math.random()*w,Math.random()*h,1,Math.random()*1-.5,Math.random()*1-.5)
}


window.addEventListener('mousemove',(e) => {
  xPosition=e.clientX;
  yPosition=e.clientY;
})

function animate(){
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,w,h)
  for (var i = 0; i < 50; i++) {
    points[i].update();
  }
}
animate();
