const FORM_STATE = "feedback-form-state";

const form = document.querySelector(".feedback-form");


checkLocalStorage();

if (formData) {
    form.email.value = formData.email;
    form.message.value = formData.message;   
}

const recordFormData = function (e) {
    
    formData[`${e.target.name}`] = e.target.value;

    localStorage.setItem(FORM_STATE, JSON.stringify(formData))
    
}



form.addEventListener('input', recordFormData);

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