let helpdeskvgEyeOn = document.getElementById("helpdesk-svg-eye-on");
let helpdeskvgEyeOff = document.getElementById("helpdesk-svg-eye-off");
let helpdeskPassword = document.getElementById("helpdesk-password");

if(helpdeskvgEyeOn){
    helpdeskvgEyeOn.addEventListener("click", () => {
        helpdeskvgEyeOn.classList.toggle("helpdesk-none");
        helpdeskvgEyeOff.classList.toggle("helpdesk-none");
        helpdeskPassword.type = "text";
    });
    helpdeskvgEyeOff.addEventListener("click", () => {
        helpdeskvgEyeOff.classList.toggle("helpdesk-none");
        helpdeskvgEyeOn.classList.toggle("helpdesk-none");
        helpdeskPassword.type = "password";
    });
}

/* ACCORDION */

let helpdeskAccordionElt = document.querySelectorAll(".helpdesk-accordion-elt");

if(helpdeskAccordionElt){
    helpdeskAccordionElt.forEach((elt) => {
        if(elt.classList.contains("helpdesk-accordion-elt-active")){
            elt.querySelector(".helpdesk-cacher-text").textContent = "Cacher";
        }else{
            elt.querySelector(".helpdesk-cacher-text").textContent = "Afficher";
        }
        elt.querySelector(".helpdesk-cacher-text").addEventListener("click", () => {
            elt.classList.toggle("helpdesk-accordion-elt-active");
            if(elt.classList.contains("helpdesk-accordion-elt-active")){
                elt.querySelector(".helpdesk-cacher-text").textContent = "Cacher";
            }else{
                elt.querySelector(".helpdesk-cacher-text").textContent = "Afficher";
            }
        });
    });
}
/* ACCORDION */

/* helpdesk SINGLE */

let helpdeskBtnQuitter = document.getElementById("helpdesk-btn-quitter");
let helpdeskDemandeDeincidentSingle = document.getElementById("helpdesk-demande-de-incident-single");
let helpdeskTableauincidentBody = document.querySelectorAll(".helpdesk-tableau-incident-body");

helpdeskTableauincidentBody.forEach((elt) => {
    elt.addEventListener("click", () => {
        helpdeskDemandeDeincidentSingle.classList.toggle("helpdesk-none");
    });
});

if(helpdeskBtnQuitter){
    helpdeskBtnQuitter.addEventListener("click", () => {
        helpdeskDemandeDeincidentSingle.classList.toggle("helpdesk-none");
    });
}

