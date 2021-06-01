//var grades=[80,77,88,95,68];
//for (var i = 0; i <grades.length;i++) {
//  var total+=grades[i];
//};
//var avg=total/grades.length;

  e=Math.E;
  E=Math.E;
  epower=Math.exp;
  ln=Math.log
  P=Math.PI;
  Pi=Math.PI;
  PI=Math.PI;


  //square roots
  cbrt=Math.cbrt;
  cuberoot=Math.cbrt;
  //cube roots
  sqrt=Math.sqrt;
  squareroot=Math.sqrt;
  //powers e.g power(5;2)=5^2=25
  power=Math.pow;
  //nth roots  eg nth(32,rt(5))
   function nthroot(a,k){
return(Math.pow(a,1/k));
}
  nth=Math.pow;
  sin=Math.sin;
  cos=Math.cos;
  tan=Math.tan;
  sininverse=Math.asin;
  cosinverse=Math.acos;
  taninverse=Math.atan;
  //argument of 5-2i = argument(-2;5)
  Argument=Math.atan2;
 function round(a){
return(Math.round(a));
}
function Round(a){
return(Math.round(10000000000*a)/10000000000);
}

  //trig functions
function sind(a){
return(Math.sin(Math.PI*a/180));
}
function cosd(a){
return(Math.cos(Math.PI*a/180));
}
function tand(a){
return(Math.tan(Math.PI*a/180));
}

function cosecd(a){
return(1/Math.sin(Math.PI*a/180));
}
function secd(a){
return(1/Math.cos(Math.PI*a/180));
}
function cotd(a){
return(1/Math.tan(Math.PI*a/180));
}

function sin(a){
return(Math.sin(a));
}
function cos(a){
return(Math.cos(a));
}
function tan(a){
return(Math.tan(a));
}

function cosec(a){
return(1/Math.sin(a));
}
function sec(a){
return(1/Math.cos(a));
}
function cot(a){
return(1/Math.tan(a));
}


function sinh(a){
return((e**a-e**(-a))/2);
}
function cosh(a){
return((e**a+e**(-a))/2);
}
function tanh(a){
return(sinh(a)/cosh(a));
}

function cosech(a){
return(1/cosh(a));
}
function sech(a){
return(1/cosh(a));
}
function coth(a){
return(1/tanh(a));
}

//trig inverses

function sininvd(a){
return(180*Math.asin(a)/P);
}
function cosinvd(a){
return(180*Math.acos(a)/P);
}
function taninvd(a){
return(180*Math.atan(a)/P);
}

function cosecinvd(a){
return(180*Math.asin(1/a)/P);
}
function secinvd(a){
return(180*Math.acos(1/a)/P);
}
function cotinvd(a){
return(180*Math.atan(1/a)/P);
}


function sininv(a){
return(Math.asin(a));
}
function cosinv(a){
return(Math.acos(a));
}
function taninv(a){
return(Math.atan(a));
}

function cosecinv(a){
return(Math.asin(1/a));
}
function secinv(a){
return(Math.acos(1/a));
}
function cotinv(a){
return(Math.atan(1/a));
}


function sinhinv(a){
return(ln(a+sqrt(a*a+1)));
}
function coshinv(a){
return(Math.abs(ln(a-sqrt(a*a-1))));
}
function tanhinv(a){
return(0.5*ln((1+a)/(1-a)));
}

function cosechinv(a){
return(ln(1/a+sqrt(1/(a*a)+1)));
}
function sechinv(a){
return(Math.abs(ln(1/a-sqrt(1/(a*a)-1))));
}
function cothinv(a){
return(0.5*ln((1+1/a)/(1-1/a)));
}

function fatso(name,age,dafi){
return(name+age+dafi);

}
function mins(){
 const mins= new Date().getMilliseconds();
return(mins);
}


function sum(a,b){
	return(a+b);
}
//ap
function wom$AP$nthterm(a,d,k){
return(a+(k-1)*d);
}
function wom$AP$sum(a,d,n){
return((n/2)*(2*a+(n-1)*d));
}
function wom$AP$sum2(a,d,m,n){
return((n/2)*(2*a+(n-1)*d)-((m-1)/2)*(2*a+(m-2)*d));
}
//gp
function wom$GP$nthterm(a,r,k){
return(a*r**(k-1));
}
function wom$GP$sum(a,r,n){
return(a*((r**n)-1)/(r-1));
}
function wom$GP$sum2(a,r,m,n){
return(a*((r**n)-1)/(r-1)-a*((r**(m-1))-1)/(r-1));
}
//other with formula
function wom$nthterm(f,k){
	const funct=f;
	const functk=funct.replaceAll("n",k);
	const result=eval(functk);
return(result);
}




function wom$sum(f,n){
	const funct=f;
	const functn=funct.replaceAll("n",n);
	const result=eval(functn);
return(result);
}
function wom$summ(f,n){
	const funct=f;
	const funct1=funct.replaceAll("n",n);
	const result=eval(Math.sum(2,3,4));
return(result);
}

function wom$sum2(a,r,m,n){
return(a*((r**n)-1)/(r-1)-a*((r**(m-1))-1)/(r-1));
}

//shuffle images near the footer
//snumber function
function sn(){
  const m=mins();
  const s=Math.floor(m/99);
return(s);
}
//round
function D(a){
return(Math.round(10000*a)/10000);
}
//function F(a){
  //const val=a.reduce((b,c)=>b*c,0);
  //return(val);
//}

//array function
function WomSum(a){
  const val=a.reduce((b,c)=>1*(b/1+1*c)*1,0);
  return(val);
}
function WomCount(a){
  const val=a.length;
  return(val);
}

function WomMean(a){
  const val=a.reduce((b,c)=>b+c,0);
  return(val/a.length);
}

function WomMin(a){
  const val=a.reduce((b,c)=>Math.min(b,c));
  return(val);
}
function WomMax(a){
  const val=a.reduce((b,c)=>Math.max(b,c));
  return(val);
}



