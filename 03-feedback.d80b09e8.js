!function(){var e="feedback-form-state",t=document.querySelector(".feedback-form"),a={email:"",message:""};t.addEventListener("input",(function(t){localStorage.getItem(e)&&(a=JSON.parse(localStorage.getItem(e))),a["".concat(t.target.name)]=t.target.value,localStorage.setItem(e,JSON.stringify(a))}))}();
//# sourceMappingURL=03-feedback.d80b09e8.js.map
