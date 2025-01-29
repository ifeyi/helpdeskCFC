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
let helpdeskIncidentSingleSubmit = document.getElementById("helpdesk-incident-single-submit");

helpdeskTableauincidentBody.forEach((elt) => {
    elt.addEventListener("click", () => {
        helpdeskDemandeDeincidentSingle.classList.toggle("helpdesk-none");
    });
});

if(helpdeskBtnQuitter){
    helpdeskBtnQuitter.addEventListener("click", () => {
        helpdeskDemandeDeincidentSingle.classList.toggle("helpdesk-none");
    });
    helpdeskIncidentSingleSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        helpdeskDemandeDeincidentSingle.classList.toggle("helpdesk-none");
    });
}

/* Déclaration incident */

let helpdeskDeclarerIncident = document.getElementById("helpdesk-declarer-incident");
let helpdeskIncidentFormWrapper = document.getElementById("helpdesk-incident-form-wrapper");
let helpdeskIncidentFormSvgAnnuler = document.getElementById("helpdesk-incident-form-svg-annuler");
let helpdeskIncidentFormSubmit = document.getElementById("helpdesk-incident-form-submit");
let helpdeskIncidentFormError = document.getElementById("helpdesk-incident-form-error");
let helpdeskIncidentFormTitle = document.getElementById("helpdesk-incident-form-title");
let helpdeskIncidentFormDescription = document.getElementById("helpdesk-incident-form-description");
let helpdeskIncidentFormInputs = document.querySelectorAll(".helpdesk-incident-form .helpdesk-input");

if(helpdeskDeclarerIncident){
    helpdeskDeclarerIncident.addEventListener("click", () => {
        helpdeskIncidentFormWrapper.classList.toggle("helpdesk-none");
    });
    helpdeskIncidentFormSvgAnnuler.addEventListener("click", () => {
        helpdeskIncidentFormWrapper.classList.toggle("helpdesk-none");
    });
    helpdeskIncidentFormSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if(helpdeskIncidentFormTitle.value === "" || helpdeskIncidentFormDescription.value === ""){
            helpdeskIncidentFormError.innerHTML = "<p class='helpdesk-error-text'>Veuillez donner un titre et une description à votre incident.</p>";
        }
    });
    helpdeskIncidentFormInputs.forEach(helpdeskIncidentFormInput => helpdeskIncidentFormInput.addEventListener("input", () => {
        if(helpdeskIncidentFormInput.value !== ""){
            helpdeskIncidentFormError.innerHTML = "";
        }
    }));

}
/* Déclaration incident */

/* Commentaires incident */
let helpdeskComBtnAjouter = document.getElementById("helpdesk-com-btn-ajouter");
let helpdeskComBtnAnnuler = document.getElementById("helpdesk-com-btn-annuler");
let helpdeskComBtnEnvoyer = document.getElementById("helpdesk-com-btn-envoyer");
let helpdeskComForm = document.getElementById("helpdesk-com-form");
let helpdeskComText = document.getElementById("helpdesk-com-text");
let helpdeskComFormError = document.getElementById("helpdesk-com-form-error");

if(helpdeskComBtnAjouter){
    helpdeskComBtnAjouter.addEventListener("click", () => {

        helpdeskComForm.classList.toggle("helpdesk-none");
        helpdeskComBtnAjouter.classList.toggle("helpdesk-none");
    });
    helpdeskComBtnAnnuler.addEventListener("click", (e) => {
        e.preventDefault();
        helpdeskComForm.classList.toggle("helpdesk-none");
        helpdeskComBtnAjouter.classList.toggle("helpdesk-none");
    });
    helpdeskComBtnEnvoyer.addEventListener("click", (e) => {
        e.preventDefault();
        if(helpdeskComText.value === ""){
            helpdeskComFormError.innerHTML = "<p class='helpdesk-error-text'>Vous ne pouvez pas envoyer un commentaire vide.</p>"
        } else{
            helpdeskComForm.classList.toggle("helpdesk-none");
            helpdeskComBtnAjouter.classList.toggle("helpdesk-none");
        }
    });
    helpdeskComText.addEventListener("input", () => {
        if(helpdeskComText.value !== ""){
            helpdeskComFormError.innerHTML = "";
        }
    });
}
/* Commentaires incident */