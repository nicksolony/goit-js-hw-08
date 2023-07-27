const e=document.querySelector(".feedback-form");let t={email:"",message:""};e.addEventListener("input",(function(e){localStorage.getItem("feedback-form-state")&&(t=JSON.parse(localStorage.getItem("feedback-form-state"))),t[`${e.target.name}`]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}));
//# sourceMappingURL=03-feedback.89fe9cb2.js.map
