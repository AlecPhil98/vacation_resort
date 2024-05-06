"use strict"

window.onload = function () {

    let priceQuoteForm = document.querySelector("#priceQuote")

    priceQuote.addEventListener("submit", customizeStay)


}

function customizeStay(event) {

    //prevents the page from reloading 
    event.preventDefault();

    //targets the event foor the form 
    let priceQuoteForm = event.target

    //room types of stay
    let typeOfStay = 150 * Number(priceQuoteForm.numOfNights.value);

    //let queennightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let kingnightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let twoBedRoomightStay = 150 * Number(priceQuoteForm.numOfNights.value);

    //tax amount 
    let taxAmount = typeOfStay * (12 / 100);

    //discounts
    let discounts = 0;

    if (priceQuoteForm.noDiscount.checked) {

        discounts = 0
    }
    if (priceQuoteForm.seniorDiscount.checked) {

        discounts = 10 / 100;

    }
    if (priceQuoteForm.militaryDiscount.checked) {

        discounts = 20 / 100;
    }







    function getRoomRate() {


    }


   

}

//total due 
let totalDue = typeOfStay + discounts + taxAmount;

let message= `
<div class="mt-3"> totalDue: ${totalDue.tofixed(2)} </div>
`

//put message on the screen 
document.querySelector("#results").innerHTML = message
