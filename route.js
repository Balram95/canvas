var canvas= document.getElementById('canvas');
var w= window.innerWidth;
var h= window.innerHeight;
canvas.width=w;
canvas.height=h;


var ctx = canvas.getContext('2d');



var mouse ={
  x:null,
  y:null
}

window.addEventListener('mousemove',(event)=>{
  mouse.x=event.x;
  mouse.y=event.y;
})

var x_axis=true;
var y_axis=true;

function Words(x,y,value){
  this.x=x;
  this.y=y;
  this.value=value;
  this.opacity=1;
  this.size=40;

  this.draw=function(){
    ctx.fillText(this.value,this.x,this.y);
    ctx.font= this.size+"px Georgia";
    ctx.globalAlpha = this.opacity
  }

  this.update=function(){

    // set velocity according to mouse position

    this.dx=(mouse.x-w/2)/100;
    this.dy=(mouse.y-h/2)/100;

    // check the direction for x-axis and y-axis
    if(this.x>w||this.x<0){
      x_axis=!x_axis;
    }
    if(this.y>h||this.y<0){
      y_axis=!y_axis
    }

    if(x_axis){
      this.x+=this.dx
      if(y_axis){
          this.y+=this.dy
      }else{
          this.y-=this.dy
      }

    }
    // going opposite size
    
    else{
      if(y_axis){
          this.y+=this.dy
      }else{
          this.y-=this.dy
      }

      // change opactity and size when font is behind
      if(this.x>w/2){
        this.opacity-=0.005
        this.size-=.09;
      }else {
          this.opacity+=0.005
          this.size+=.09;
      }
      this.x-=this.dx
      this.y-=this.dy
    }


    this.draw();
  }
}

var node1=new Words(w/2,h/2,'Node');
var node2=new Words(w/3,h/3,'Canvas');
var node3=new Words(w/5,h/5,'Angular');
var node4=new Words(w/8,h/8,'React');
function animate(){
requestAnimationFrame(animate);
  ctx.clearRect(0,0,w,h);
  node1.update();
  node2.update();
  node3.update();
  node4.update();
}
animate();
