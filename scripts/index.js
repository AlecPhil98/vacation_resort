"use strict"

window.onload = function () {

    let priceQuoteForm = document.querySelector("#priceQuoteForm")

    priceQuote.addEventListener("submit", customizeStay)


}

function customizeStay(event) {

    //prevents the page from reloading 
    event.preventDefault();

    //targets the event foor the form 
    let priceQuoteForm = event.target

    //room types of stay
    let roomTotal = Number(priceQuoteForm.numOfNights.value) * getRoomRate(priceQuoteForm.checkInDate.valuelue, priceQuoteForm.roomType.value);
    console.log(`This is the total room amount ${roomTotal} from the ${numOfNights} and ${checkInDate}`)

    //let queennightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let kingnightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let twoBedRoomightStay = 150 * Number(priceQuoteForm.numOfNights.value);

    //number of nights stayed at 
    let numOfNights = priceQuoteForm.numOfNights.value


    //discounts
    let discounts = 0;
    console.log("This is the discount applied " + discounts)

    if (priceQuoteForm.noDiscount.checked) {

        discounts = 0
    }
    if (priceQuoteForm.seniorDiscount.checked) {

        discounts = 10 / 100;

    }
    if (priceQuoteForm.militaryDiscount.checked) {

        discounts = 20 / 100;
    }

    //number of nights stayed 
    //if (numOfNights >= 1) {
    //}

    //tax amount 
    let discountRoom = roomTotal - (roomTotal * discounts)
    let taxAmount = discountRoom * (12 / 100)





    //total due 
    let totalDue = 0;
    console.log(totalDue)


    let message = `
    <div class="mt-3"> Orginal Room Cost: ${roomTotal.tofixed(2)} </div>
    <div class="mt-3"> Discount value: $${discounts.tofixed(2)} </div>
    <div class="mt-3"> Discount room cost: $${discountRoom.tofixed(2)} </div>
    <div class="mt-3"> Tax Amount: $${taxAmount.tofixed(2)} </div>
    <div class="mt-3"> totalDue: ${totalDue.tofixed(2)} </div>
    `

    //put message on the screen 
    document.querySelector("#results").innerHTML = message

}

function getRoomRate(checkInDate, roomType) {

    if (roomType === "2BedRoom") {

        return 250;
    }

    return 150;
}


