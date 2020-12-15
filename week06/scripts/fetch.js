function GetBookings(){
    let url = 'https://api.sheety.co/f69038c6ee1e7950b8ca2f5803dcd15a/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.bookings);
    });
};