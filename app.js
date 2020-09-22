const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');


function sendData(count,successRate){
    if(count === successRate){
        swal("Good job!", "success");
    }
}

function successAlert(){
    const formControls = document.getElementsByClassName('form-control');
    let count = formControls.length - 1;
    let successRate;
    for(var i=0; i<formControls.length; i++){
        if(formControls[i].className === 'form-control success'){
            successRate =0+i;
            sendData(count,successRate);
            console.log(successRate);
        }else{
            return false;
        }
    }
}

function isEmail(emailvalue){
    var symbol = emailvalue.indexOf("@");
    if (symbol < 1) return false;
    var dot = emailvalue.lastIndexOf('.');
    if(dot<= symbol+2) return false;
    if(dot === emailvalue.length -1 ) return false;
    return true;

}

function myFunction() {
    alert("Hello! I am an alert box!");
  }

function validate() {
        const usernamevalue = username.value.trim();
        const emailvalue =  email.value.trim();
        const numbervalue = number.value.trim();
        const pass1value = password1.value.trim();
        const pass2value = password2.value.trim();
        if(usernamevalue === ""){
            setErrorMessage(username,"username cannot be empty");
        }else if(usernamevalue.length < 3){
            setErrorMessage(username,"Username min 3 character");
        }else{
            setSuccessMessage(username);
        }
        if(emailvalue === ""){
            setErrorMessage(email,"email cannot be empty");
        }else if(!isEmail(emailvalue)){
            setErrorMessage(email,"Is not a valid email");
        }else{
            setSuccessMessage(email);
        }  

        if(numbervalue === ""){
            setErrorMessage(number,"phone number cannot be empty");
        }else if(numbervalue.length<10){
            setErrorMessage(number,"phone number at least 10 digit");
        }else{
            setSuccessMessage(number);
        }  

        if(pass1value === ""){
            setErrorMessage(password1,"password cannot be empty");
        }else if(pass1value.length<5){
            setErrorMessage(password1,"password should be at least 6 char");
        }else{
            setSuccessMessage(password1);
        }  

        if(pass2value === ""){
            setErrorMessage(password2,"password cannot be empty");
        }else if(pass1value !== pass2value){
            setErrorMessage(password2,"password does not match");
        }else{
            setSuccessMessage(password2);
        }  

        
}

function setErrorMessage(input, message){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small'); 
     formControl.className = "form-control error";
     small.textContent = message;
}
function setSuccessMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
    successAlert();
})
