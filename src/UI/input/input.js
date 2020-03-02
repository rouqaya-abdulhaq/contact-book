import './input.css';
import {validateInput} from '../../utilities/validateInput';
/*AN OBJECT CONTAINING THE INPUT TYPE, VALUE AND ID SHOULD BE PASSED WHERE EACH 
INPUT WILL BE VALIDATED BY THE VALIDATEiNPUT AND IF THAT TURNS TRUE A VALID CALSS WILL BE
TOGGELED IF NOT INVALID CLASS WILL */

export const createInputs = (valueObject) =>{
    //CHECK IF INPUT IS AN OBJECT
    const inputFields = document.createElement("div");
    if(valueObject){
        for (const value in valueObject) {
            inputFields.appendChild(createInput(valueObject[value]));
        }  
    }
    return inputFields;
}

export const createInput = (inputObj) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class","inputWrapper");
    const inputBox = inputTest(inputObj.id,inputObj.type);
    const label = createLabel("label", inputObj.label);
    label.setAttribute("class","label");
    wrapper.appendChild(label);
    wrapper.appendChild(inputBox);
    return wrapper;
}

const inputTest = (id, type) => {
    const inputBox = createInputBox(id); 
    inputBox.addEventListener("input",()=>console.log(validateInput({value : inputBox.value, type : type})));
    return inputBox;
}

//i'm gettting the info by the id not really sure if this is the best idea
const createInputBox = (id) => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("id" , id);                                                
    inputBox.setAttribute("class" , "inputBox");
    return inputBox;
}

const createLabel = (className, value) => {
    const label = document.createElement("label");
    label.setAttribute("class" , className);
    label.innerText = value;
    return label;
}