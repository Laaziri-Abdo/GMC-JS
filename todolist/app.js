var input= document.getElementById("userInput");
var ul = document.querySelector("ul");
var enterButton = document.getElementById("enter");


function createListElement(){
    var li =document.createElement("li"); // creates an emlement "li"
    li.appendChild(document.createTextNode(input.value)); //makes text input field the li text
    ul.appendChild(li); // adds li to ul 
    // li.setAttribute('id','para-1');
    input.value=""; // texet text viiid 
// start add delete button 
    var dBtn =  document.createElement('button'); //creat button delete 
    dBtn.appendChild(document.createTextNode("X")); // creat X and push in dbtn 
    li.appendChild(dBtn); //push dbtn in li 
    dBtn.addEventListener("click" , deleteListItem);// oncklic 


    function deleteListItem(){
        li.classList.add("delet");
    }




}
function inputLength(){
    return input.value.length;   
}
function addLisAfterClick(){
if (inputLength()>0){
    createListElement();
}
}
function addListAfterKeypress(ev) {
    if (inputLength() > 0 && ev.which === 13) { 
        createListElement();
        console.log(ev);
    }
}
enterButton.addEventListener("click" ,addLisAfterClick );
input.addEventListener("keypress" ,addListAfterKeypress);

