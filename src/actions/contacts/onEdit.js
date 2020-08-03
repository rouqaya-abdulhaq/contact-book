import {createContact} from "../../contacts/contactCreate";
import {validateContact} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {extractContact,extractContactValues} from '../../utilities/extract';
import {displayErrScreen} from '../../errHandler/errHandler';

export const onEdit = (targetedContact,newContactInfo,contactId) =>{
    if(validateContact(newContactInfo)){
        editContact(targetedContact,newContactInfo,contactId);
        return true;
    }else{
        submitBtnToAlert(event);
        return false;
    }
}

const editContact = (targetedContact, newContactInfo,contactId) =>{
    const contact = extractContactValues(newContactInfo);
    contact.contactId = contactId;
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(contact)
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const extractedContactInfo = extractContact(contact);
                const newContact = createContact(extractedContactInfo);
                editContactList(targetedContact, newContact);
            }).catch((err)=>{
                displayErrScreen("could not edit contact");
            });
}

const editContactList = (oldContact ,newContact) =>{
    oldContact.parentNode.replaceChild(newContact,oldContact);
}
