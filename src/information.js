import {createInput , createBtn} from './form';

 class Information  {
    constructor(firstName, lastName, age, address, mobileNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.address= address;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    createContactForm (){
        const form = document.createElement("form");
        const firstNameInput = createInput("first name : "); 
        const lastNameInput = createInput("last name : "); 
        const emailInput = createInput("email : "); 
        const phoneNumberInput = createInput("phone number : ");
        const submitBtn = createBtn("submit");
        form.append(firstNameInput,lastNameInput,emailInput,phoneNumberInput,submitBtn);
        return form; 
    }


    handlesignInForm (){
        
    }

    handlesignUpForm (){
        
    }

}

export default Information;
