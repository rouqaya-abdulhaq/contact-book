
export const createContact = (firstName,lastName,onEdit,onDelete) => {
    let contContainer = document.createElement("div");
    let contact = createContactName(firstName,lastName);
    addContactToContainer(contact,contContainer,onEdit,onDelete);
    return contContainer;
}

const createContactName = (firstName,lastName) => {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contactName");
    contact.innerText = firstName + " " + lastName; 
    return contact;
}
//maybe there is a way to make this shorter with onEdit, onDelete
const addContactToContainer = (contact ,container ,onEdit, onDelete) =>{
    container.appendChild(contact);
    container.appendChild(createEditBtn(onEdit));
    container.appendChild(createDeleteBtn(()=> onDelete(container)));
}

const createEditBtn = (onEdit) => {
    let editImg = document.createElement("IMG");
    editImg.setAttribute("src","src/icon.png");
    editImg.setAttribute("alt","edit icon");
    editImg.setAttribute("id","contactEdit");
    editImg.addEventListener("click",onEdit)
    return editImg; 
}

const createDeleteBtn = (onDelete) => {
    let deleteBtn = document.createElement("div");
    deleteBtn.innerText = " x ";
    deleteBtn.setAttribute("id","contactDelete");
    deleteBtn.addEventListener("click",onDelete);
    return deleteBtn;
}

export const editContact = (editedinfo,contactTargeted,onEdit,onDelete) => {
    contactTargeted.innerText = "";
    let info = document.createElement("div");
    info.innerText = editedinfo;
    addContactToContainer(info,contactTargeted,onEdit,onDelete);
}

