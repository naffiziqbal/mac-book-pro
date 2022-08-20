const memoryBtn = document.getElementById('memory-section');
const memory1 = document.getElementById('memory-1')
const memory2 = document.getElementById('memory-2')

const storageBtn = document.getElementById('storage-section');
const storage1 = document.getElementById('storage-1')
const storage2 = document.getElementById('storage-2')
const storage3 = document.getElementById('storage-3')

const deliveryBtn = document.getElementById('delivery-section');
const delivery1 = document.getElementById('delivery1')
const delivery2 = document.getElementById('delivery2')


const basePrice = document.getElementById('base-price');
const basePriceString = basePrice.innerText;
const basePriceValue = parseFloat(basePriceString);

const extraMemory = document.getElementById('extra-memory');
const extraMemoryString = extraMemory.innerText;
let extraMemoryValue = parseFloat(extraMemoryString);

const extraStorage = document.getElementById('extra-storage');
const extraStorageString = extraMemory.innerText;
let extraStorageValue = parseFloat(extraMemoryString);



const deliveryCharge = document.getElementById('delivey-charge');
const deliveryChargeString = deliveryCharge.innerText;
let deliveryChargeValue = parseFloat(deliveryChargeString)

const totalPrice = document.getElementById('total-price');
const totalPriceString = totalPrice.innerText;
const totalPriceValue = parseFloat(totalPriceString);

memoryBtn.addEventListener('click', (e) => {
    if (e.target === memory1) {
        const newExtraMemory = 59;
        extraMemory.innerText = newExtraMemory;

        const newTotalPrice = totalPriceValue + newExtraMemory;
        totalPrice.innerText = newTotalPrice
        extraMemoryValue = newExtraMemory


        memory1.classList.add('btn-active');
        memory2.classList.remove('btn-active');
    }
    else {
        // const newPrice = basePriceValue + 400;
        // basePrice.innerText = newPrice
        const newExtraMemory = 69
        extraMemory.innerText = newExtraMemory;

        const newTotalPrice = totalPriceValue + newExtraMemory;
        console.log(newTotalPrice, `TP`, extraMemoryValue);

        totalPrice.innerText = newTotalPrice;
        extraMemoryValue = newExtraMemory


        memory2.classList.add('btn-active');
        memory1.classList.remove('btn-active');
    }
})

storageBtn.addEventListener('click', (e) => {
    if (e.target === storage1) {
        const newStorage = 80;
        extraStorage.innerText = newStorage;

        const newTotalPrice = totalPriceValue + newStorage + extraMemoryValue;
        console.log(newTotalPrice, `TP`, newStorage, extraMemoryValue);
        totalPrice.innerText = newTotalPrice;
        extraMemoryValue = newStorage;

        storage1.classList.add('btn-active');
        storage2.classList.remove('btn-active');
        storage3.classList.remove('btn-active')
    }
    else if (e.target === storage2) {
        const newStorage = 90;
        extraStorage.innerText = newStorage;
        const newTotalPrice = totalPriceValue + newStorage + extraMemoryValue;
        console.log(newTotalPrice, `TP`, newStorage, extraMemoryValue);
        totalPrice.innerText = newTotalPrice;

        storage2.classList.add('btn-active');
        storage1.classList.remove('btn-active');
        storage3.classList.remove('btn-active')
    } else {
        const newStorage = 100;
        extraStorage.innerText = newStorage;
        const newTotalPrice = totalPriceValue + newStorage + extraMemoryValue;
        console.log(newTotalPrice, `TP`, newStorage, extraMemoryValue);
        totalPrice.innerText = newTotalPrice;

        storage3.classList.add('btn-active');
        storage1.classList.remove('btn-active');
        storage2.classList.remove('btn-active')
    }
})

deliveryBtn.addEventListener('click', (e) => {
    if (e.target === delivery1) {
        delivery1.classList.add('btn-active');
        delivery2.classList.remove('btn-active');
        deliveryCharge.innerText = '0';
    }
    else {
        const newCharge = 20;
        deliveryCharge.innerText = newCharge;

        const newTotalPrice = totalPriceValue + newCharge + extraMemoryValue + newCharge;
        console.log(newTotalPrice, `TP`, newStorage, extraMemoryValue);

        totalPrice.innerText = newTotalPrice;

        delivery2.classList.add('btn-active');
        delivery1.classList.remove('btn-active');
    }
})




