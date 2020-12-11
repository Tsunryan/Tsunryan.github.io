function getRandomUser(){
    let xhttps = new XMLHttpRequest() //create request object

    xhttps.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById('FirstName');
            let elLastName = document.getElementById('LastName');
            let eljsonResult = document.getElementById('jsonResult');
            let elUserImage = document.getElementById('UserImage');    
            let elPhone = document.getElementById('phone');
            let elAddress = document.getElementById('address');
            let elEmail = document.getElementById('email');

            elFirstName.innerHTML = data.results[0].name.first;
            elLastName.innerHTML = data.results[0].name.last;
            elUserImage.src = data.picture[0].picture.large;
            elUserImage.title = data.results[0].name.first + ' ' + data.result[0].name.last;
            

            eljsonResult.innerHTML = this.response;
    }
}

    xhttps.open('GET','https://randomuser.me/api/',true);
    xhttps.send();
    }


let elGetRandomUser = document.getElementById('getRandomUserBtn');
elGetRandomUser.addEventListener('click',function(){
    getRandomUser();
})