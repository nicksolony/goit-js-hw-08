const FORM_STATE = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let formData = {
    email:"",
    message:""
};

const recordFormData = function (e) {
    
    if (localStorage.getItem(FORM_STATE)) {
        formData = JSON.parse(localStorage.getItem(FORM_STATE))
    };
    
    formData[`${e.target.name}`] = e.target.value;

    localStorage.setItem(FORM_STATE, JSON.stringify(formData))
    
}

form.addEventListener('input', recordFormData);

