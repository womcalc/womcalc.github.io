armo1Button = document.getElementById("label");  
  armo1Solution = function(){  
    const question = document.getElementById("question").value;  

 var   armo1Output=womheader+'<div id="jsection">'+ "<b>Question</b>"+'</div>'+'<br>'+  
    
    'Real Question for '+question+' '+"<br>" +    
     "<br>"+  

      '<div id="jsection">'+ "<b>Solution</b>"+'</div>'+'<br>'+  '<div id="answer">'+  
       '<div id="smallcont3">'+" ANSWER ★ "+'<a href="#table1"> Answer</a>'+
       "</div>"+'<br>'+'<div class="clear"></div></div><br>'+'<br>'+
       " </b>"+"<br>"+  '<div id="jssubsection">'+   "<b> ★ WORKING </b>"+'</div>'+"<br>";
       

armo1Output +="Hola<br>"  +
               womlinkx+womfooter  ; 
 document.getElementById("SkRez").innerHTML=armo1Output;  
 };  
armo1Button.addEventListener("click",armo1Solution);  




















