


       ShowGraph=document.getElementById("button1");  
       ShowSolution =function(){  
        var click = document.getElementById("womgraph");  
        if(click.style.display==="none"){  click.style.display = "block" ;  
       }else{  click.style.display = "block";  }  } ;  
       ShowGraph.addEventListener("click",ShowSolution); 

       ShowGraph2=document.getElementById("button1");  
       ShowSolution2 =function(){  
        var click = document.getElementById("out11");  
        if(click.style.display==="none"){  click.style.display = "block" ;  
       }else{  click.style.display = "block";  }  } ;  
       ShowGraph2.addEventListener("click",ShowSolution2); 

       HideGraph=document.getElementById("B1");  
       HideSolution =function(){  
        var click = document.getElementById("womgraph");  
        if(click.style.display==="none"){  click.style.display = "none" ;  
       }else{  click.style.display = "none";  }  } ;  
       HideGraph.addEventListener("click",HideSolution); 

       HideGraph2=document.getElementById("B1");  
       HideSolution2 =function(){  
        var click = document.getElementById("out11");  
        if(click.style.display==="none"){  click.style.display = "none" ;  
       }else{  click.style.display = "none";  }  } ;  
       HideGraph2.addEventListener("click",HideSolution2); 

//graph g8
//f(x)=x**4-16*x**3+86*x**2-176*x+105
//f(x)=x**5-25*x**4+230*x**3-950*x**2+1689*x-945
//f(x):10*(x-6)^2:(x-1)(x-3)(x-6)(x-8)(x-9):10*(x-6)^3:100/(x^2-6*x+8)
SkButtonQuad4Graphg8=document.getElementById("button1");
SkSolutionQuad4Graphg8=function(){
let canvas=document.getElementById('womgraph');
canvas.width=560;
canvas.height=460;
	

  const a0b1 = document.getElementById("input1").value;
  const y0=a0b1.split(':');
const y=y0[0];
const x00=y.split('(');
const x0= x00[1].split(')');
const x=x0[0];
  const a0 = a0b1.replaceAll(x,'('+x+')');
  const a01=a0.replaceAll(')(',')*(');
//  const a02=a01.replaceAll(/\d+'\('/,/\d+'*('/);
  const a=a01.replaceAll('^','**');
 

  const aa1=a.split(':');
 
const aa2=[[[[a,a+':0'][+(aa1.length==5)],a+':0:0'][+(aa1.length==4)],a+':0:0:0'][+(aa1.length==3)],a+':0:0:0:0'][+(aa1.length==2)];

  const a1=aa2.split(':');
  const a2=a1[1];

const a22=a1[2];
const a23=a1[3];
const a24=a1[4];
const a25=a1[5];



const xcontrol=eval(document.getElementById("xcontrol").value);
  const xvalmin1 =eval(document.getElementById("xvalmin1").value);
  const xval2 = 1*(xvalmin1/xcontrol+10);

const xl1111=a2.replaceAll(x,'(1*((xvalmin1)/1+xcontrol*0)/1)');
const xl1=eval(xl1111);

const xl2222=a22.replaceAll(x,'(1*((xvalmin1)/1+xcontrol*0)/1)');
const xl2=eval(xl2222);
const xl3333=a23.replaceAll(x,'(1*((xvalmin1)/1+xcontrol*0)/1)');
const xl3=eval(xl3333);
const xl4444=a24.replaceAll(x,'(1*((xvalmin1)/1+xcontrol*0)/1)');
const xl4=eval(xl4444);
const xl5555=a25.replaceAll(x,'(1*((xvalmin1)/1+xcontrol*0)/1)');
const xl5=eval(xl5555);




const ypose=Math.min(Math.max(1*(xval2/2-3*xvalmin1/xcontrol),2),42);
const ypos=1*(xval2/2-3*xvalmin1/xcontrol);
const xpos=25;

const skero=eval(document.getElementById("skero").value);


let xGrid=5;
let yGrid=5;
let cellSize=5; 


let xGride=50;
let yGride=50;
let cellSizee=50; 
let ctx=canvas.getContext('2d');

const xcont=47;
const xint=25;

function drawGrids() 
{
  ctx.beginPath();

  while(xGrid<canvas.height)
  {
    ctx.moveTo(0,xGrid);
    ctx.lineTo(canvas.width,xGrid);
    xGrid+=cellSize;
  }

  while(yGrid<canvas.width)
  {
    ctx.moveTo(yGrid,0);
    ctx.lineTo(yGrid, canvas.height);
    yGrid+=cellSize;
  }

  ctx.strokeStyle="#dddd";
  ctx.stroke();
}

//larger grids
function drawGride() 
{
  ctx.beginPath();

  while(xGride<canvas.height)
  {
    ctx.moveTo(0,xGride);
    ctx.lineTo(canvas.width,xGride);
    xGride+=cellSizee;
  }

  while(yGride<canvas.width)
  {
    ctx.moveTo(yGride,0);
    ctx.lineTo(yGride, canvas.height);
    yGride+=cellSizee;
  }

  ctx.strokeStyle="gray";
  ctx.stroke();
}


 
function blocks(count)
{
  return count*10;
}

function drawAxis()
{
  ctx.beginPath();
  ctx.strokeStyle="blue";
  ctx.moveTo(blocks(ypose),blocks(2));
  ctx.lineTo(blocks(ypose),blocks(48));
  ctx.lineTo(blocks(ypose),blocks(xpos));
  ctx.lineTo(blocks(2),blocks(xpos));
  ctx.lineTo(blocks(55),blocks(xpos));
  ctx.lineTo(blocks(ypose),blocks(xpos));
  ctx.stroke();
}



function labels(){
    ctx.beginPath();
    ctx.fillStyle="purple";
    ctx.translate(2,2);
    ctx.fillText(y,blocks(ypose)+3,17);
//y labels
    ctx.fillText(-20*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1+1*20.4));
    ctx.fillText(-15*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1+1*15.4));
    ctx.fillText(-10*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1+1*10.4));
    ctx.fillText(-5*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1+1*5.4));
    ctx.fillText(5*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1-1*4.6));
    ctx.fillText(10*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1-1*9.6));
    ctx.fillText(15*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1-1*14.6));
    ctx.fillText(20*skero,1*(blocks(ypose)*1-1*20)*1,blocks(xpos*1-1*19.6));

    ctx.fillText(x,540,1*blocks(xpos/1+1*1)/1);

    ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*0)/1)/1000,1*(xcont+xint*0)*1,1*blocks(xpos/1+1*1)/1);
    ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*2)/1)/1000,1*(xcont+xint*2)*1,1*blocks(xpos/1+1*1)/1);
    ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*4)/1)/1000,1*(xcont+xint*4)*1,1*blocks(xpos/1+1*1)/1);
    ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*6)/1)/1000,1*(xcont+xint*6)*1,1*blocks(xpos/1+1*1)/1);
    ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*8)/1)/1000,1*(xcont+xint*8)*1,1*blocks(xpos/1+1*1)/1);
  ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*10)/1)/1000,1*(xcont+xint*10)*1,1*blocks(xpos/1+1*1)/1);
  ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*12)/1)/1000,1*(xcont+xint*12)*1,1*blocks(xpos/1+1*1)/1);
  ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*14)/1)/1000,1*(xcont+xint*14)*1,1*blocks(xpos/1+1*1)/1);
  ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*16)/1)/1000,1*(xcont+xint*16)*1,1*blocks(xpos/1+1*1)/1);
  ctx.fillText(Math.round(1000*1*(((xvalmin1)/1)+xcontrol*18)/1)/1000,1*(xcont+xint*18)*1,1*blocks(xpos/1+1*1)/1);



    ctx.fillText("^",blocks(ypos)-3,23);
    ctx.fillText(">",548,1*blocks(xpos/1+1*0.3)/1);
   
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

function CalcGraph()
{
  ctx.beginPath();
  ctx.strokeStyle="red";

  ctx.moveTo(1*(xcont+2+xint*0)*1,1*(blocks(xpos)+0-10*xl1/skero)*1);
  for (let i=0;i<1000;i++){
    ctx.lineTo(1*(xcont+2+xint*(i/50))*1,1*(blocks(xpos)+0-10*(eval(a2.replaceAll(x,(1*((xvalmin1)/1+xcontrol*(i/50)/1)))))/skero)*1);
  };

  ctx.stroke();
}

function CalcGraph2()
{
  ctx.beginPath();
  ctx.strokeStyle="green";

  ctx.moveTo(1*(xcont+2+xint*0)*1,1*(blocks(xpos)+0-10*xl2/skero)*1);
  for (let i=0;i<1000;i++){
    ctx.lineTo(1*(xcont+2+xint*(i/50))*1,1*(blocks(xpos)+0-10*(eval(a22.replaceAll(x,(1*((xvalmin1)/1+xcontrol*(i/50)/1)))))/skero)*1);
  };

  ctx.stroke();
}

function CalcGraph3()
{
  ctx.beginPath();
  ctx.strokeStyle="#f25609";

  ctx.moveTo(1*(xcont+2+xint*0)*1,1*(blocks(xpos)+0-10*xl3/skero)*1);
  for (let i=0;i<1000;i++){
    ctx.lineTo(1*(xcont+2+xint*(i/50))*1,1*(blocks(xpos)+0-10*(eval(a23.replaceAll(x,(1*((xvalmin1)/1+xcontrol*(i/50)/1)))))/skero)*1);
  };

  ctx.stroke();
}

function CalcGraph4()
{
  ctx.beginPath();
  ctx.strokeStyle="#123";

  ctx.moveTo(1*(xcont+2+xint*0)*1,1*(blocks(xpos)+0-10*xl4/skero)*1);
  for (let i=0;i<1000;i++){
    ctx.lineTo(1*(xcont+2+xint*(i/50))*1,1*(blocks(xpos)+0-10*(eval(a24.replaceAll(x,(1*((xvalmin1)/1+xcontrol*(i/50)/1)))))/skero)*1);
  };

  ctx.stroke();
}

function CalcGraph5()
{
  ctx.beginPath();
  ctx.strokeStyle="#e318d7";

  ctx.moveTo(1*(xcont+2+xint*0)*1,1*(blocks(xpos)+0-10*xl5/skero)*1);
  for (let i=0;i<1000;i++){
    ctx.lineTo(1*(xcont+2+xint*(i/50))*1,1*(blocks(xpos)+0-10*(eval(a25.replaceAll(x,(1*((xvalmin1)/1+xcontrol*(i/50)/1)))))/skero)*1);
  };

  ctx.stroke();
}
//
//(1*(xvalmin1/1+xcontrol*(i/10+0.333)/1))
labels();
drawGrids();
drawGride();
drawAxis();
CalcGraph();
CalcGraph2();
CalcGraph3();
CalcGraph4();
CalcGraph5();

}
SkButtonQuad4Graphg8.addEventListener("click",SkSolutionQuad4Graphg8);

//f(x):x**5-25*x**4+230*x**3-950*x**2+1689*x-945:x:x**2:2*x**2-3:e**x
//f(N):20/((N+6)(N-8)):(N+1)(N-1):(N-5)^2