function validate(e) {

    console.log(username)
    checkUsername()
    checkEmail()
    checkPassword()
    confirmPassword()
}

function checkUsername( ){
    let username = document.getElementById('username').value
    if (username.length > 5){ 
        document.getElementById('username').classList.remove('wrong')
        document.getElementById('username').classList.add('right')
    } else {
        document.getElementById('username').classList.add('wrong')
        document.getElementById('username_error').style.display = "block";
        setTimeout(() => {
            document.getElementById('username_error').style.display = "none";
        }, 1500);
    }
}

function checkEmail() {
    let email = document.getElementById('email').value
    if (email.length > 5 && email.includes('@')) {
        document.getElementById('email').classList.remove('wrong')
        document.getElementById('email').classList.add('right')
    } else {
        document.getElementById('email').classList.add('wrong')
        document.getElementById('email_error').style.display = "block";
        setTimeout(() => {
            document.getElementById('email_error').style.display = "none";
        }, 1500);
    }
}

function checkPassword() {
    let password = document.getElementById('password').value
    if (password.length > 5 && password.length <15) {
        document.getElementById('password').classList.remove('wrong')
        document.getElementById('password').classList.add('right')
        return true
    } else {
        document.getElementById('password').classList.add('wrong')
        document.getElementById('password').style.display = "block";
        setTimeout(() => {
            document.getElementById('password_error').style.display = "none";
        }, 1500);
        return false
    }
}

function confirmPassword() {
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value
    let check = checkPassword()
    if ( check && password === cpassword) {
        document.getElementById('cpassword').classList.remove('wrong')
        document.getElementById('cpassword').classList.add('right')
    } else {
        document.getElementById('cpassword').classList.add('wrong')
        document.getElementById('cpassword').style.display = "block";
        setTimeout(() => {
            document.getElementById('cpassword_error').style.display = "none";
        }, 1500);
    }
}


function resetValidation(id) {
    document.getElementById(id).classList.remove('wrong')
    document.getElementById(id).classList.remove('right')
}