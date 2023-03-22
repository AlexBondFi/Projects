form = document.querySelector('form');

let size;
let sizeResult = 0;
let toppingResult = 0;

summary = (id) => {
    let namePrint = document.querySelector('#name').value;
    displayName.textContent = (`Customer: ${namePrint}`);

  

if (id === 'size2'){
    sizeResult = 7.5;
    size = 'for 2';
}
else if (id === 'size4'){
    sizeResult = 10.5;
    size = 'for 4';
}
else if (id === 'size6'){
    sizeResult = 12.5;
    size = 'for 6';
}
else if (id === 'size8'){
    sizeResult = 15.5;
    size = 'for 8';
}

let toppingResult = 0;
const toppingCB = document.querySelectorAll('input[name=topping]:checked');
if (toppingCB.length>4){
    toppingResult = (toppingCB.length - 4)*0.5
};

let toppingList = [];
for (let i=0; i<toppingCB.length; i++){
    toppingList.push(' '+toppingCB[i].id)
}

let homeSelect = 0;
const deliveryMethod = document.querySelector('select[name=delivery]');
if (deliveryMethod.value === 'inhere') {
    
    deliveryPrint = 'Eat here';
}

else if (deliveryMethod.value === 'takeout'){
    deliveryPrint = 'Take away';
}

else if (deliveryMethod.value === 'home') {
    homeSelect +=5;
    deliveryPrint = 'Home delivery'
}

selectedSize.textContent = (`Pizza size is: ${size}`)
totalPrice.textContent = (`Total price is: ${sizeResult + toppingResult + homeSelect} €`)
totalToppings.textContent = (`Toppings to add: ${toppingList}`);
selectDelivery.textContent = (`Delivery method is: ${deliveryPrint}`);

}
form.addEventListener('input', function (event){
    summary(event.target.id);
});