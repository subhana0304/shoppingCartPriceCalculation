// case price
function getUpdateCaseNumber(isIncrease){
    const previousCaseInput = document.getElementById('case-number');
    const previousCaseInputValueString = previousCaseInput.value;
    const previousCaseInputValue = parseInt(previousCaseInputValueString);
    
    let newCaseInputValue;
    if(isIncrease === true){
        newCaseInputValue = previousCaseInputValue + 1;
    }else{
        newCaseInputValue = previousCaseInputValue - 1;
    }
    previousCaseInput.value = newCaseInputValue;
    
    return newCaseInputValue;
}
function getUpdateCaseTotalPrice(newCaseInputValue){
    const totalCasePrice = newCaseInputValue * 59;
    const previousCasePrice = document.getElementById('total-case-price');
    previousCasePrice.innerText = totalCasePrice;
}
function getCaseTextElementById(elementId){
    const total = document.getElementById(elementId);
    const currentTotalString = total.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
function getCaseElementByText(inputId, value){
    const subTotalElement = document.getElementById(inputId);
     subTotalElement.innerText = value;
}

document.getElementById('case-plus').addEventListener('click', function () {
    const newCaseInputValue = getUpdateCaseNumber(true);  

    getUpdateCaseTotalPrice(newCaseInputValue);

    const phoneTotal = getCaseTextElementById('total-phone-price');
    const caseTotal = getCaseTextElementById('total-case-price');
    
    const subTotal = phoneTotal + caseTotal;
    getCaseElementByText('totalPrice', subTotal);
    console.log(typeof subTotal);

    // tax calculation
    let taxString = (subTotal * 0.1).toFixed(2);
    let tax = parseFloat(taxString);
    getCaseElementByText('tax', tax);
   
    // final calculation
    const finalPrice = subTotal + tax;
    getCaseElementByText('final-price', finalPrice);
    
})

document.getElementById('case-minus').addEventListener('click', function () {
    const newCaseInputValue = getUpdateCaseNumber(false);

    getUpdateCaseTotalPrice(newCaseInputValue); 

    const phoneTotal = getCaseTextElementById('total-phone-price');
    const caseTotal = getCaseTextElementById('total-case-price');
    
     const subTotal = phoneTotal + caseTotal;
     getCaseElementByText('totalPrice', subTotal);

    // tax calculation
    let taxString = (subTotal * 0.1).toFixed(2);
    let tax = parseFloat(taxString);
    getCaseElementByText('tax', tax);
   
    // final calculation
    const finalPrice = subTotal + tax;
    getCaseElementByText('final-price', finalPrice);
})


// phone price
function getUpdatePhoneNumber(isIncrease){
    const previousPhoneInput = document.getElementById('phone-number');
    const previousPhoneInputValueString = previousPhoneInput.value;
    const previousPhoneInputValue = parseInt(previousPhoneInputValueString);
    
    let newPhoneInputValue;
    if(isIncrease === true){
        newPhoneInputValue = previousPhoneInputValue + 1;
    }else{
        newPhoneInputValue = previousPhoneInputValue - 1;
    }
    previousPhoneInput.value = newPhoneInputValue;
    return newPhoneInputValue;
}
function getUpdatePhoneTotalPrice(newPhoneInputValue){
    const totalPhonePrice = newPhoneInputValue * 1219;
    const previousPhonePrice = document.getElementById('total-phone-price');
    previousPhonePrice.innerText = totalPhonePrice;
}
function getPhoneTextElementById(elementId){
    const total = document.getElementById(elementId);
    const currentTotalString = total.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
function getElementPhoneByText(inputId, value){
    const subTotalElement = document.getElementById(inputId);
     subTotalElement.innerText = value;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    const newPhoneInputValue = getUpdatePhoneNumber(true);

    getUpdatePhoneTotalPrice(newPhoneInputValue);

    const phoneTotal = getPhoneTextElementById('total-phone-price');
    const caseTotal = getPhoneTextElementById('total-case-price');
    
     const subTotal = phoneTotal + caseTotal;
     getElementPhoneByText('totalPrice', subTotal);

     // tax calculation
    let taxString = (subTotal * 0.1).toFixed(2);
    let tax = parseFloat(taxString);
    getCaseElementByText('tax', tax);
   
    // final calculation
    const finalPrice = subTotal + tax;
    getCaseElementByText('final-price', finalPrice);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const newPhoneInputValue = getUpdatePhoneNumber(false);

    getUpdatePhoneTotalPrice(newPhoneInputValue);

    const phoneTotal = getPhoneTextElementById('total-phone-price');
    const caseTotal = getPhoneTextElementById('total-case-price');
    
    const subTotal = phoneTotal + caseTotal;
    getElementPhoneByText('totalPrice', subTotal);

   // tax calculation
   let taxString = (subTotal * 0.1).toFixed(2);
   let tax = parseFloat(taxString);
   getCaseElementByText('tax', tax);
  
   // final calculation
   const finalPrice = subTotal + tax;
   getCaseElementByText('final-price', finalPrice);
})