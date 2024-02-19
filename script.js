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

let seatVariant = "Economoy";
let seatBooked = 0;
let seatLeft = 40;
for (const seat of allSeats) {

    seat.addEventListener('click', function (e) {
        if (!selectedSeats.includes(this)) {
            selectedSeats.push(this);

            displayBookedseat()
            this.setAttribute("disabled", "");
            this.style.color = "white";
            this.style.backgroundColor = "#1DD100"


        }



        if (selectedSeats.length >= 4) {
            const goId = document.getElementById('go');
            goId.style.pointerEvents = 'none';

        }



        const inputPhone = document.getElementById('inputPhone').value.length;
        const modal = document.getElementById('modal');
        if (selectedSeats.length > 0) {
            modal.classList.remove('disable');
        }


        seatBooked++;
        setInnerText('seat-booked', seatBooked);
        seatLeft--;
        setInnerText('seat-left', seatLeft);

    })



}
const modalButton = document.getElementById('modalBtn');
modalButton.addEventListener('click', function () {
    window.location.reload();
})
function displayBookedseat() {
    let selectedUl = document.getElementById('seat-data');
    selectedUl.innerHTML = '';
    let totalPrice = parseInt(document.getElementById('total-price').innerText);
    let grandTotalPrice = parseInt(document.getElementById('grand-total').innerText);

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
    })

}

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
            alert('Invalid coupon code!')
        }
    }

    else {
        alert('Buy Four seats to get discount!')
        return;
    }
})




