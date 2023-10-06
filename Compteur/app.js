var x=0
function incrementer (){
x=x+1;
var incr=document.getElementById('value');
incr.innerText=x;
if(x>0){
incr.style="color:green";
}
if(x==0){
    document.getElementById('value').style="color:black"
}
}
function restart(){
    x=0
    document.getElementById('value').innerText=x;
    document.getElementById('value').style="color:black"
}
function decrementer(){
    x=x-1
    var decr=document.getElementById('value');
    decr.innerText=x;
    if(x<0){
    decr.style="color:red";
    }
    if(x==0){
        document.getElementById('value').style="color:black"
    }
}