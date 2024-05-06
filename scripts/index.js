"use strict"

window.onload = function () {

    let priceQuoteForm = document.querySelector("#priceQuoteForm")

    priceQuoteForm.addEventListener("submit", customizeStay)


}   



function customizeStay(event) {

    //prevents the page from reloading 
    event.preventDefault();

    //targets the event foor the form 
    let priceQuoteForm = event.target

    //number of nights stayed at 
 //let numOfNights = Number(priceQuoteForm.numOfNights.value);
 //let numOfNights = document.querySelector("#numOfNights")


    //room types of stay
    let roomTotal = Number(priceQuoteForm.numOfNights.value) * getRoomRate(priceQuoteForm.checkInDate.value, priceQuoteForm.roomType.value);
    console.log(`This is the total room amount: $${roomTotal} from the number of nights ${Number(priceQuoteForm.numOfNights.value)} on this date ${Date(priceQuoteForm.checkInDate.value)}`)

    //let queennightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let kingnightStay = 150 * Number(priceQuoteForm.numOfNights.value);
    //let twoBedRoomightStay = 150 * Number(priceQuoteForm.numOfNights.value);



    //discounts
    let discounts = 0;
    console.log("This is discounts " + discounts +"%")

    if (priceQuoteForm.noDiscount.checked) {

        discounts += 0;
    }
    if (priceQuoteForm.seniorDiscount.checked) {

        discounts += .10;

    }
    if (priceQuoteForm.militaryDiscount.checked) {

        discounts += .20;
    }

    //number of nights stayed 
    //if (numOfNights >= 1) {
    //}

    //tax amount 
    let discountRoom = roomTotal - (roomTotal * discounts);
    let taxAmount = discountRoom * (12 / 100);

    console.log("This is discounted room $" + discountRoom)
    console.log("This is tax withheld after discount $" + taxAmount)




    //total due 
    let totalDue = discountRoom - taxAmount;
    console.log("This is total Due $" + totalDue)

    let message = `
<div> Orginal Room Cost: ${roomTotal.toFixed(2)} </div>
<div> Discount value: ${discounts.toFixed(2)}%</div>
<div> Discount room cost: $${discountRoom.toFixed(2)} </div>
<div> Tax Amount: $${taxAmount.toFixed(2)} </div>
<div class="mt-3"> totalDue: $${totalDue.toFixed(2)} </div>
`

//put message on the screen 
document.querySelector("#results").innerHTML = message




}

function getRoomRate(checkInDate, roomType) {

    //checkInDate.document.querySelector("#checkInDate")

    if (roomType === "2BedRoom") {

        return 250;
    }


    return 150
}

