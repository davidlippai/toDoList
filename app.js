let addButton = document.getElementById("addBtn");
let toDoContainer = document.getElementById("toDoList");
let inputField = document.getElementById("listInput");


addButton.addEventListener("click", function(){
  let paragraph = document.createElement("p");
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function(){
    paragraph.classList.add("paragraph-done");
 })
})

//------------------Delete Btn

let deleteButton = document.getElementById("deleteBtn");

deleteButton.addEventListener("click", function(){
  toDoContainer.removeChild(paragraph);
})


let newListBtn = document.getElementById("newList");

newListBtn.addEventListener("click", function(){
  container.removeChild(toDoContainer);
})

