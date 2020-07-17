var i=0;
function timeout(){
    
    i=i+1;
    postMessage(i);
  setTimeout('timeout()',1000)
 
}
timeout()