
const searchCar = document.querySelector('#searchBtn')
const searchCar2 = document.querySelector('#searchBtn2')
const addCar = document.querySelector('#addCar')
const searchResult = document.querySelector('#searchResult')
const result = document.querySelector('#result')

const cars = [];

class Car {
    constructor(license, maker, model, owner, price, color) {
        this.carLicense = license;
        this.carMaker = maker;
        this.carModel = model;
        this.carOwner = owner;
        this.carPrice = price;
        this.carColor = color;
        this.carDisc = function () {
            this.carDiscount = 0;
        
            if (this.carPrice < 5000){
                this.carDiscount =  (this.carPrice)-(this.carPrice*0.1)
                return this.carDiscount
            }
        
        else if (5000 < this.carPrice < 20000){
            this.carDiscount =  (this.carPrice)-(this.carPrice*0.15)
            return this.carDiscount
        }
        else if (this.carPrice > 20000){
            this.carDiscount =  (this.carPrice)-(this.carPrice*0.25)
            return this.carDiscount
        }
        };
    }
}

function carPush (event){
    event.preventDefault()
    const newLicense = document.querySelector('#license').value;
    const newMaker = document.querySelector('#maker').value;
    const newModel = document.querySelector('#model').value;
    const newOwner = document.querySelector('#owner').value;
    const newPrice = document.querySelector('#price').value;
    const newColor = document.querySelector('#color').value;
    const newCar = new Car(newLicense, newMaker, newModel, newOwner, newPrice, newColor)
    const newCarDiscount = newCar.carDisc();
    cars.push(newCar)


    document.querySelector("#result").innerHTML = cars.map(car => 
        `<tr>
        <td>${car.carLicense}</td>
        <td>${car.carMaker}</td>
        <td>${car.carModel}</td>
        <td>${car.carOwner}</td>
        <td>${car.carPrice}</td>
        <td>${car.carColor}</td>
        </tr>`).join('')
}

const searchByLicense = () => {
    const licenseInput = document.querySelector('#licenseNumber').value;
    const foundCar = cars.find(Car => Car.carLicense === licenseInput);

    const searchResult = document.querySelector('#searchResult');

    if (foundCar) {
        searchResult.innerText = `Yor car is: \nLicense-number: ${foundCar.carLicense} \nMaker: ${foundCar.carMaker} \nModel: ${foundCar.carModel} \nOwner: ${foundCar.carOwner} \nPrice: ${foundCar.carPrice} \nColor: ${foundCar.carColor} \nPrice with discount: ${foundCar.carDiscount}`;
      } else {
        searchResult.innerText = "Car not found";
      }
}

searchCar.addEventListener('click', searchByLicense)
addCar.addEventListener('click', carPush)