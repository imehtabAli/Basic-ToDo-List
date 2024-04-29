const addButton = document.getElementById("addDataButton");
const inputData = document.getElementById("inputData");
const idList = document.querySelector("#idList");

function panel(){

    if (inputData.value.trim() === '') {
        return;
    }

    const toDoData = document.createElement("div");
    toDoData.className = "toDoData";

    const textData = document.createElement("p");
    textData.className = "textData";
    textData.textContent = inputData.value;
    
    const remove = document.createElement("button");
    remove.id = "remove";
    remove.innerText = "Remove"
    remove.addEventListener("click", function(){
        idList.removeChild(toDoData);
        idList.classList.remove('idListStyle');
    })
    idList.classList.add('idListStyle');
    toDoData.appendChild(textData);
    toDoData.appendChild(remove);
    idList.appendChild(toDoData);

    inputData.value = "";

}

addButton.addEventListener("click", panel);

inputData.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        panel();
    }
});
