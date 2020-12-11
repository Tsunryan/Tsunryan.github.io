function getRandomUser(){
    let xhttps = new XMLHttpRequest() //create request object

    xhttps.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById('FirstName');
            let elLastName = document.getElementById('LastName');
            let elJsonResult = document.getElementById('jsonResult');
            let elUserImage = document.getElementById('UserImage');    
            let elPhone = document.getElementById('phone');
            let elAddress = document.getElementById('address');
            let elEmail = document.getElementById('email');
            
            elJsonResult.innerHTML = this.response;
    }

    xhttp.open('GET','https://randomuser.me/api/', true);
    xhttps.send();
    };


let elGetRandomUser = document.getElementById('getRandomUserBtn');
elGetRandomUser.addEventListener('click',function(){
    getRandomUser();
})