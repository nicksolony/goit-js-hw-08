import throttle from 'lodash.throttle';

const FORM_STATE = "feedback-form-state";

const form = document.querySelector(".feedback-form");

checkLocalStorage();

updateFormData();

const recordFormData = function (e) {
    
    formData[`${e.target.name}`] = e.target.value;

    localStorage.setItem(FORM_STATE, JSON.stringify(formData))
    
};

form.addEventListener('input', throttle(recordFormData, 500));

form.addEventListener('submit',e=>onFormSubmit(e));

function checkLocalStorage() {

    if (localStorage.getItem(FORM_STATE)) {
       return formData = JSON.parse(localStorage.getItem(FORM_STATE))
    } else {
        return formData = {
            email:"",
            message:""
        };
    };
    
};

// function recordFormData(e) {
//     checkLocalStorage();
    
//     formData[`${e.target.name}`] = e.target.value;

//     localStorage.setItem(FORM_STATE, JSON.stringify(formData))
// }

function updateFormData () {
    if (formData) {
        form.email.value = formData.email;
        form.message.value = formData.message;   
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FORM_STATE)));

    localStorage.removeItem(FORM_STATE);
    checkLocalStorage();
    updateFormData();

};