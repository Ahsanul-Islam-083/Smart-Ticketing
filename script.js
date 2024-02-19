document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    })
});

let selectedSeats = [];
const allSeats = document.getElementsByClassName("allSeat");
// console.log(allSeats );
let seatVariant = "Economoy";
let seatBooked = 0;
let seatLeft = 40;
for (const seat of allSeats) {

    seat.addEventListener('click', function (e) {
        if (!selectedSeats.includes(this)) {
            selectedSeats.push(this);
            // console.log(this);
            displayBookedseat()
            this.setAttribute("disabled", "");
            this.style.color = "white";
            this.style.backgroundColor = "#1DD100"


        }


        // const tSeats = document.querySelectorAll('.allSeat');
        // const arrayA = [...tSeats];
        // const arrayB = [...selectedSeats];
        // // console.log(tSeats);
        // const resultArray = arrayA.filter(elementA => !arrayB.includes(elementA));
        // console.log(typeof (resultArray.length));
        // if (resultArray.length === 36) {
        //     arrayA.forEach(elementA => {
        //         if (!resultArray.includes(elementA)) {
        //             elementA.setAttribute("disabled", "");
        //         }
        //     });
        // }


        if (selectedSeats.length >= 4) {
            const goId = document.getElementById('go');
            goId.style.pointerEvents = 'none';
            alert('You have reached your buying limit & congratulation you can apply coupon code!')
        }


        //     else if(selectedSeats.length > 4){
        //     selectedSeats.setAttribute("disabled", ""); 
        // }
        // const seatName = this.innerText;

        // const selectedUl = document.getElementById('seat-data');
        // const li = document.createElement('li')
        // const p = document.createElement('p')
        // p.innerText = seatName;
        // const p2 = document.createElement('p')
        // p2.innerText = seatVariant;
        // const p3 = document.createElement('p')
        // p3.innerText = price;




        const modalButton =document.getElementById('modalBtn');
        modalButton.addEventListener('click', function () {
            // selectedSeats=[];
            // document.getElementById('seat-data').innerText = "";
            // document.getElementById('total-price').innerText = "";
            // document.getElementById('grand-total').innerText = '';
            window.location.reload();
            console.log(modalButton);
        })




        // li.appendChild(p);
        // li.appendChild(p2);
        // li.appendChild(p3);
        // selectedUl.appendChild(li);
        seatBooked++;
        setInnerText('seat-booked', seatBooked);
        seatLeft--;
        setInnerText('seat-left', seatLeft);

        // totalPrice('total-price',price);

        // grandTotalPrice('grand-total',price)
    })
    function conditionCheak() {
        // const inputPhone = document.getElementById('inputPhone').value.length;
        const modal = document.getElementById('modal');
        if (selectedSeats.length > 0) {
            modal.classList.remove('disable');
        }


    }

}



function displayBookedseat() {
    let selectedUl = document.getElementById('seat-data');
    selectedUl.innerHTML = '';
    let totalPrice = parseInt(document.getElementById('total-price').innerText);
    let grandTotalPrice = parseInt(document.getElementById('grand-total').innerText);
    // console.log(totalPrice);
    selectedSeats.forEach(seat => {

        const ticketPrice = parseInt(seat.dataset.price || 0);
        document.getElementById('total-price').innerText = totalPrice + ticketPrice;
        document.getElementById('grand-total').innerText = grandTotalPrice + ticketPrice;

        const li = document.createElement('li')
        const seatName = seat.innerText;
        const p = document.createElement('p')
        p.innerText = seatName;
        const p2 = document.createElement('p')
        p2.innerText = seatVariant;
        const p3 = document.createElement('p')
        p3.innerText = ticketPrice;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedUl.appendChild(li);

        // function setInnerText(id, value) {
        //     document.getElementById(id).innerText = value;
        // }



        // seatBooked++;
        // setInnerText('seat-booked', seatBooked);
        // seatLeft--;
        // setInnerText('seat-left', seatLeft);
    })

}

// function totalPrice(id, value) {
//     const totalPrice = document.getElementById(id).innerText;
//     const convertedTotalPrice = parseInt(totalPrice);
//     sum = convertedTotalPrice + value;
//     setInnerText(id, sum);
// }
// function grandTotalPrice(id, value) {
//     const totalPrice = document.getElementById(id).innerText;
//     const convertedTotalPrice = parseInt(totalPrice);
//     sum = convertedTotalPrice + value;
//     setInnerText(id, sum);
// }



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
const couponCode1 = 'NEW15';
const couponCode2 = 'Couple 20';
const applyBtn = document.getElementById('applyBtn');
applyBtn.addEventListener('click', function () {
    const couponField = document.getElementById('couponField').value;
    if (selectedSeats.length === 4) {

        if (couponField === couponCode1) {
            const discountData = document.getElementById('discount');
            const totalTicketPrice = selectedSeats.length * 550;
            const discountAmount = totalTicketPrice * 0.15;
            const p = document.createElement('p');
            p.innerText = 'Discount';
            const p2 = document.createElement('p');
            p2.innerText = 'BDT' + discountAmount;
            discountData.appendChild(p);
            discountData.appendChild(p2);
            document.getElementById('grand-total').innerText = totalTicketPrice * 0.85;
            const hideDiv = document.getElementById('vanish');
            hideDiv.classList.add('hidden')

        }
        else if (couponField === couponCode2) {
            const discountData = document.getElementById('discount');
            const totalTicketPrice = selectedSeats.length * 550;
            const discountAmount = totalTicketPrice * 0.2;
            const p = document.createElement('p');
            p.innerText = 'Discount';
            const p2 = document.createElement('p');
            p2.innerText = 'BDT' + discountAmount;
            discountData.appendChild(p);
            discountData.appendChild(p2);
            document.getElementById('grand-total').innerText = totalTicketPrice * 0.8;
            const hideDiv = document.getElementById('vanish');
            hideDiv.classList.add('hidden')
        }
        else {
            alert('Invalid code!')
        }
    }

    else {
        alert('Buy Four seats to get discount!')
        return;
    }
})




