const e=document.querySelector(".feedback-form");a(),t();function a(){return localStorage.getItem("feedback-form-state")?formData=JSON.parse(localStorage.getItem("feedback-form-state")):formData={email:"",message:""}}function t(){formData&&(e.email.value=formData.email,e.message.value=formData.message)}e.addEventListener("submit",(e=>function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),a(),t()}(e))),e.addEventListener("input",(function(e){formData[`${e.target.name}`]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(formData))}));
//# sourceMappingURL=03-feedback.becf300f.js.map