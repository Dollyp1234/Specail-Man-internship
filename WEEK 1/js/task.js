const form = document.querySelector(".form")
const firstName = document.querySelector("#first-Name")
const lastName = document.querySelector("#last-Name")
const phoneNumber = document.querySelector("#number")
const email = document.querySelector("#email")
const password = document.querySelector("#password");

form.addEventListener('submit', inputValue);

function inputValue(event) {
    event.preventDefault();
if(firstName.value === ""){
    setIncorrectFor(firstName, 'please input your first name')
    
}
else{
    setCorrect(firstName)
}
if(lastName.value === ""){
    setIncorrectFor(lastName, 'please input your last name')
}
else {
    setCorrect(lastName)
}
if(phoneNumber.value === ""){
    setIncorrectFor(phoneNumber, 'please input your phone number')
    
}
else if(phoneNumber.value.length < 11){
    setIncorrectFor(phoneNumber, 'please your phone number is incomplete')

}
else{
    setCorrect(phoneNumber)
}
if(email.value === ""){
    setIncorrectFor(email, 'input a valid email')
}
else{
    setCorrect(email)
}
if(password.value.length <= 8){
    setIncorrectFor(password, 'Your password should not be less than 8')
}
else{
    setCorrect(password)
}
}

function setIncorrectFor(input, message){
    const formField = input.parentElement;
    const small = formField.querySelector('small');
    small.innerText = message;
    formField.className = 'form-Field error';
}

function setCorrect(input){
    const formField = input.parentElement;
    formField.className = 'form-Field true'
} 