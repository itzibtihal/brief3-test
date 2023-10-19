const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

/*
let parent = this.parentNode;
const focusFunc =() => parent.classList.add("focus"); 

focusFunc = () => {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
  
const focusFunc = () => {
  let parent = this.parentNode;
   parent.classList.add("focus") 
 
};
 
*/
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* fuction envoyer les emails */
function sendEmail(){

  Email.send({
      SecureToken : "42c529bc-70a3-45e7-889a-b9a8dbd6a5b2",
      To : 'beibtihalo@gmail.com',
      From : "beibtihalo@gmail.com",
      Subject : "NEW EMAIL",
      Body : "Name :" +document.getElementById("name").value
                      + " <br> Email : " +document.getElementById("email").value
                      +"<br> Phone number : "+document.getElementById("phone").value
                      +"<br> Message :" +document.getElementById("message").value
   }).then(
message => alert("message sent seccesfully")
         );
}


/* validation form */

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const errorElement = document.getElementById('error');

form.addEventListener('submit',(e) =>{
  let messages=[] 
  if(name.value === '' || name.value == null){
    messages.push('Name is required')
  }

  if (message.lengh > 0 ){
    e.preventDefault()
    errorElement.innerText = messages.join(' ,')
  }

})

/*const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");




 nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs)); */