import {validateContact} from '../../utilities/validation/validation';
import {submitBtnToAlert} from '../domElements/buttonManipulation';
import {addContactToDom} from '../domElements/addToDom';
import {userInfoCopy} from '../../registration/user';
import {extractContactValues} from '../../utilities/extract';

export const onSubmit = (contactInfo) => {
    if(validateContact(contactInfo)){
        addContact(contactInfo);
        return true;
    }else{
        console.log("wrong data");
        submitBtnToAlert(event);
        return false;
    }
}

const addContact = (contactInfo) =>{
    const extractedContact = extractContactValues(contactInfo);
    extractedContact.userId = userInfoCopy.userId;
    fetch('http://localhost:5000/contactAdd',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(extractedContact)
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                if (contact){
                    addContactToDom(contact);
                }
            }).catch((err)=>{
                console.log(err);
            });
}
