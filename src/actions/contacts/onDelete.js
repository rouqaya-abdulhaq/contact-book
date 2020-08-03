const contactList = document.querySelector("#contactsList"); //TEMPORARY
import {displayErrScreen} from '../../errHandler/errHandler';

export const onDelete = (index,id) =>{
    fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : id
            })
            }).then((res)=>{
                if(res.status === 204){
                    contactList.removeChild(contactList.childNodes[index]);
                }else{
                    displayErrScreen("could not delete contact");
                }
            }).catch((err)=>{
                displayErrScreen("server error, could not delete contact");
            });
}