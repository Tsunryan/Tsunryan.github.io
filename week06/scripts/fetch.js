function GetBookings(){
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.bookings);
        let bookingList = document.getElementById('bookingList');
        bookingList.innerHTML = '';
        for(let i = 0; i < json.bookings.length;i++){
            let gName = json.booking[i].name;
            let gEmail = json.booking[i].email;
            let gPax = json.booking[i].pax;
            let gId = json.booking[i].id;

            bookingList.innerHTML += gId + '-' + gName + ', ' + 
            gEmail + ', pax' + gPax + '<br>'
        }
    });
}

let getBookingBtn = document.getElementById('getBooking');
getBookingBtn.addEventListener('click',function(){
    GetBookings();
});