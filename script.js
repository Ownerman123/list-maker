const itemTable = document.querySelector("#item-table");
const addItemBtn = document.querySelector("#add-item-btn");
const removeAllBtn = document.querySelector("#remove-all-btn");
const removeCheckedBtn = document.querySelector("#Remove-Checked-Btn")
const listItemArray = [];
function CreateNewItem() {
    const newRow = document.createElement("tr");
    newRow.classList.add("itemRows")

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "is completed";
    checkBox.value = "unchecked";
    checkBox.addEventListener('change', function () {

        if(checkBox.value === "unchecked") {
            checkBox.value = "checked";
        }else{
            checkBox.value = "unchecked"
        }

    })
    const checkLabel = document.createElement("label")
    checkLabel.textContent = "Check!"
    newRow.append(checkBox);
    newRow.append(checkLabel);

    const itemCell = document.createElement("td");
    itemCell.textContent = prompt("Enter the itemto add to the list here", "");
    newRow.append(itemCell);

    const typeCell = document.createElement("td");
    typeCell.textContent = prompt("Enter the type of item here", "");
    newRow.append(typeCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = prompt("Enter the quantity here", "");
    newRow.append(quantityCell);

    const buttonCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteButton");
    deleteBtn.textContent = "delete item ?";
    deleteBtn.addEventListener('click', function() { RemoveThis(newRow);});
    
    buttonCell.appendChild(deleteBtn);
    newRow.append(buttonCell);
    
    itemTable.append(newRow);
    listItemArray.push(newRow);


}

function RemoveThis(thing) {
    
    let indexToRemove = listItemArray.indexOf(thing);
    
    thing.remove();

    if (indexToRemove !== -1) {
        listItemArray.splice(indexToRemove, 1); // Remove 1 element at the found index
        console.log(listItemArray);
        console.log("Value removed successfully.");
    } else {
        console.log("Value not found in the array.");
    }
    
    
    

}

function RemoveAllItems() {
   const itemTable = document.getElementById("item-table");
    
    while(itemTable.firstChild) {
        itemTable.firstChild.remove();
    }

    
}

function RemoveCheckedItems() {

    for (const listItem of listItemArray) {

        if(listItem.firstChild.value === "checked") {
            RemoveThis(listItem);
        }
        
    }
    //catches left over because of index shifting
    for (const listItem of listItemArray) {

        if(listItem.firstChild.value === "checked") {
            RemoveThis(listItem);
        }
        
    }

}

addItemBtn.addEventListener('click', CreateNewItem);
removeAllBtn.addEventListener('click', RemoveAllItems);
removeCheckedBtn.addEventListener('click', RemoveCheckedItems);