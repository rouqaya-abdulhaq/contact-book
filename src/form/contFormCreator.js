import {createInput , createSubmitBtn, createCancelBtn} from './formDynamics';
import {removeFromMain} from '../domHandling/mainEffects';
import '../contacts/styles/contactList.css';
import './styles/form.css';

export const  createContactForm = (onSubmit) => {
        const form = createForm("contactForm");
        const cancelBtn = createCancelBtn(()=>{removeFromMain(form)});
        const inputFields = createContactInputs();
        const submitBtn = createSubmitBtn("submit",()=>{submitPressed(onSubmit,form)});
        form.append(cancelBtn,inputFields,submitBtn);
        return form;
}

const  createContactInputs = () => {
    const inputfilds = document.createElement("div");
    const firstNameInput = createInput("first name : ","firstName"); 
    const lastNameInput = createInput("last name : ","lastName"); 
    const emailInput = createInput("email : ", "email"); 
    const phoneNumberInput = createInput("phone number : ", "phoneNumber");
    inputfilds.append(firstNameInput,lastNameInput,
        emailInput,phoneNumberInput);
    return inputfilds; 
}


const createForm = (id) => {
        const form = document.createElement("form");
        form.setAttribute("id",id);
        form.className = 'contactPopUps'
        return form;
}

const submitPressed = ( onSubmit,form) =>{
    onSubmit();
    removeFromMain(form);
}
