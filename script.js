const itemTable = document.querySelector("#item-table");
const addItemBtn = document.querySelector("#add-item-btn");
const removeAllBtn = document.querySelector("#remove-all-btn");
function CreateNewItem() {
    const newRow = document.createElement("tr");
    newRow.classList.add("itemRows")
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


}

function RemoveThis(thing) {
    
    thing.remove();

}

function RemoveAllItems() {
   const itemTable = document.getElementById("#item-table");
    //still broke
    const rows  = itemTable.getElementsByTagName("tr");

    rows.remove();
}

addItemBtn.addEventListener('click', CreateNewItem);
removeAllBtn.addEventListener('click', RemoveAllItems);