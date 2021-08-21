let total = document.getElementById('total');
let total2 = document.getElementById('total2');


//for memory
function sixteenGbCost () {
    let extraMemory = document.getElementById('memoryCost');
    let extraMemoryPrice = extraMemory.innerText = 180;
    total.innerText = parseInt(total.innerText) + extraMemoryPrice;
    total2.innerText = total.innerText;
}

function eightGbCost () {
    let baseMemory = document.getElementById('memoryCost');
    baseMemory.innerText = 0;
    if(total.innerText > 1299){
        total.innerText = parseInt(total.innerText) - 180;
    }
    
}


let eightGb = document.getElementById('8gb');
let sixteenGb= document.getElementById('16gb');

eightGb.addEventListener ('click', eightGbCost);
sixteenGb.addEventListener('click', sixteenGbCost);
//memory functionality end


//for storage
function fiveOneTwoGbCost () {
    let extraStorage = document.getElementById('storageCost');
    let extraStoragePrice = extraStorage.innerText = 100;
    total.innerText = parseInt(total.innerText) + extraStoragePrice;
    total2.innerText = total.innerText;
}


function oneTbCost () {
    let extraStorage = document.getElementById('storageCost');
    let extraStoragePrice = extraStorage.innerText = 180;
    total.innerText = parseInt(total.innerText) + extraStoragePrice;
    total2.innerText = total.innerText;
}

function twoFiftySixGbCost () {
    let extraStorage = document.getElementById('storageCost');
    let extraStoragePrice = extraStorage.innerText = 0;
    total.innerText = parseInt(total.innerText) + extraStoragePrice;
    total2.innerText = total.innerText;
}

let twoFiftySixGb = document.getElementById('256gb');
let fiveOneTwoGb = document.getElementById('512gb');
let oneTb = document.getElementById('1tb');

fiveOneTwoGb.addEventListener('click',fiveOneTwoGbCost);
oneTb.addEventListener('click',oneTbCost);
twoFiftySixGb.addEventListener('click',twoFiftySixGbCost)
//storage functionality end

//for delivery 
function chargedDeliveryCost () {
    let deliveryCost = document.getElementById('deliveryCost');
    let chargedPrice = deliveryCost.innerText = 20;
    total.innerText = parseInt(total.innerText) + chargedPrice;
    total2.innerText = total.innerText;
}

function freeDeliveryCost () {
    let deliveryCost = document.getElementById('deliveryCost');
    let chargedPrice = deliveryCost.innerText = 0;
    total.innerText = parseInt(total.innerText) + chargedPrice;
    total2.innerText = total.innerText;
}

let freeDelivery = document.getElementById('freeDelivery');
let chargedDelivery = document.getElementById('chargedDelivery');

chargedDelivery.addEventListener('click', chargedDeliveryCost);
freeDelivery.addEventListener('click', freeDeliveryCost);
//delivery functionality end


//discont
let inputField = document.getElementById('inputField');
let couponButton = document.getElementById('couponButton');

couponButton.addEventListener ('click', function () {
    let value = inputField.value;
    inputField.value = '';
    if(value === 'stevekaku') {
        value = '';
        let discount = total2.innerText * 20 / 100; 
        total2.innerText = `  with discout your total = ${parseInt(total2.innerText - discount)}`;
        
    }else {
        total2.innerText = total.innerText;
    }
});
