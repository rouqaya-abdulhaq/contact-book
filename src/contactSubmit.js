import {addContactToDataBase , contactList,
    addContactToList,dataBase} from './contactList';
import {createContact} from "./contactDisplay";


const contactWrap = document.querySelector("#contactsList");

    export const onSubmit = () => {
        const add = getContactInfo();
        addContactToDataBase(add);
        const index = dataBase.indexOf(add);
        addContactToDom(index);
        contactWrap.appendChild(contactList);
        removeForm();
    }

    const getContactInfo = () => {
        const info = {
            firstName : document.querySelector("#firstName").value,
            lastName : document.querySelector("#lastName").value,
            email : document.querySelector("#email").value,
            phoneNumber : document.querySelector("#phoneNumber").value 
        }
        return info;
    }

    const addContactToDom = (index) => {
        const child = createContact(dataBase[index].firstName,
            dataBase[index].lastName,
            ()=>console.log(dataBase[index]));
        addContactToList(child);
    }

    const removeForm = () =>{
        const form = document.querySelector("form");
        contactMain.removeChild(form);
    }


