function validate(){
    let EmailAddr = document.getElementById('emailAddress').value;
    let ConEmail = document.getElementById('confirmEmail').value;
    if (EmailAddr != ConEmail){
        alert("Email Addresses Must Match")
        return true
    }
    else {
        return false
    }
}