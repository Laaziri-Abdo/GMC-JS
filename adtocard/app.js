let openShopping=document.querySelector('.shopping');
let closeShopping=document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCard');
let total =document.querySelector('.total');
let quantity=document.querySelector('.quantity');
let body = document.querySelector('body');

let products = [
    {
        id :1,
        name:' product 1',
        image:'1.PNG',
        price:1213
    },
    {
        id :2,
        name:' product 2',
        image:'2.PNG',
        price:1233
    },
    {
        id :3,
        name:' product 1',
        image:'3.PNG',
        price:1213
    },
    {
        id :4,
        name:' product 1',
        image:'4.PNG',
        price:1213
    },
    {
        id :5,
        name:' product 1',
        image:'5.PNG',
        price:1213
    },
    {
        id :6,
        name:' product 1',
        image:'6.PNG',
        price:1213
    },
    {
        id :6,
        name:' product 1',
        image:'6.PNG',
        price:1213
    },
    {
        id :6,
        name:' product 1',
        image:'6.PNG',
        price:1213
    },
    {
        id :6,
        name:' product 1',
        image:'6.PNG',
        price:1213
    },
    {
        id :7,
        name:' productk,dla,fl, 1',
        image:'1.PNG',
        price:1213
    }
];
function addProduct(){
    products.forEach((value ,key) =>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <button onclick="addCard(${key})">Add to cart</button>
        `;
        list.appendChild(newDiv);
    })
}
addProduct();
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener("click",()=>{
    body.classList.remove('active');
})
let listCards=[];
function addCard(key){
        listCards[key] = products[key];
        console.log(listCards);
        listCards[key].quantity=1;
    relodcard()
}
function relodcard(){
    listCard.innerHTML="";
    let count =0;
    let totalPrice =0;
    listCards.forEach((value ) =>{
        totalPrice=totalPrice + value.price;
        count=count+value.quantity;
        let newDiv=document.
        createElement('li');
        newDiv.innerHTML=`
        <div><img src="image/${value.image}"></div>
        <div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        `;
        listCard.appendChild(newDiv);
    })
    total.innerText=totalPrice;
    quantity.innerText=count;
}












