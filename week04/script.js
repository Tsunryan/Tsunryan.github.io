function transformUpperCase (){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCase();
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUpperCase);

function checkPasswordLength(){
    let password = docutment.getElementById("kataLaluan").value;
    if (password.length < 5 ){
alert ("Password must be more than 5 charater")
    }else {
        alert("Password accepted")
    }
}

let elPassword = document.getElementById("namaPengguna");
elPassword.onblur = checkPasswordLength;
