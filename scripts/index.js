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
    console.log("This is discounts " + discounts + "%")

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

    console.log("This is discounted room $" + discountRoom.toFixed(2))
    console.log("This is tax withheld after discount $" + taxAmount.toFixed(2))




    //total due 
    let totalDue = discountRoom - taxAmount;
    console.log("This is total Due $" + totalDue)

    let message = `
    <div> Orginal Room Cost: ${roomTotal.toFixed(2)} </div>
    <div> Discount value: ${discounts.toFixed(2)}%</div>
    <div> Discount room cost: $${discountRoom.toFixed(2)} </div>
    <div> Tax Amount: $${taxAmount.toFixed(2)} </div>
    <div class="mt-3"> TotalDue: $${totalDue.toFixed(2)} </div>
    `

    //put message on the screen 
    document.querySelector("#results").innerHTML = message


    getRoomRate()
}


//let newDate = document.querySelector("#checkInDate").value
//let dateRangeMonth = new Date(newDate.value + "T00:00:00").toLocaleString()
//console.log(dateRangeMonth)
//const month = dateRangeMonth

function getRoomRate(checkInDate, roomType) {


    //get a new date
    checkInDate = document.querySelector("#checkInDate").value
    let dateRangeMonth = new Date(checkInDate + "T00:00:00").toLocaleString()
    console.log(dateRangeMonth)
    console.log(dateRangeMonth.substring(0, 1))
    const month = dateRangeMonth.substring(0, 1)

    // let roomCost = 150
    // if (month >= 6 && month <= 8) {
    //     roomCost = 350
    //     console.log(month);

    // }
    // console.log(roomCost)
    


    //if statments for room type

    if (roomType === "queenRoom") {
        if(month >= 6 && month<= 8){
            return 250

        }
        return 150;
    }

    if (roomType === "kingRoom") {
        if(month >= 6 && month<= 8){
            return 250

        }

        return 150;
    }
    if (roomType === "2BedRoom") {
        if(month >= 6 && month<= 8){
            return 350

        }

        return 210;
    }




 // return 150
}

