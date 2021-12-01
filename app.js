let toDoButton = document.getElementById("toDoButton");
let toDoContainer = document.getElementById("toDoContainer");
let toDoInput = document.getElementById("toDoInput");
let itemArrey = [];


toDoButton.addEventListener('click', function(event){
  event.preventDefault(); 
  //NEW ITEM 
    let newItem = document.createElement("p");

    newItem.innerText = toDoInput.value;
    itemArrey.push(toDoInput.value);
    if (toDoInput.value == ""){;
    return alert('Please fill up the input field!');
  }

    toDoContainer.appendChild(newItem);
    toDoInput.value = "";
    newItem.classList.add("newItemClass");

  // give an Option to delete the Item
    let deleteOne = document.createElement("button");
    newItem.appendChild(deleteOne);
    deleteOne.innerHTML = '<i class="fa fa-trash"></i>';
    deleteOne.classList.add("deleteOne");
    deleteOne.addEventListener('click',function(){
      toDoContainer.removeChild(newItem);
    })

  // give an Option to mark the Item as its DONE!
    let itemDoneBtn = document.createElement("button");
    newItem.appendChild(itemDoneBtn);
    itemDoneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    itemDoneBtn.classList.add("itemDoneBtn");

    itemDoneBtn.addEventListener('click',function(){
      newItem.classList.add("itemDone");
    })


  // Give a class to the Item what is already done!
    newItem.addEventListener('click', function(){
      newItem.classList.add("itemDone");
      itemDone = document.createElement("button");
    })

  });

  if (itemArrey.length > 0) {
    let deleteAllBtn = document.createElement("button");
    deleteAllBtn.innerText = "delete all";
  }