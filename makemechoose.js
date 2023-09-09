var addBtn = document.querySelector("#addBtn");
var inputSection = document.querySelector(".wrapper-input");
var mainPage1 = document.querySelector(".container-main");
var mainPage2 = document.querySelector(".container-main2");

addBtn.addEventListener("click", addInputBox);

function addInputBox() {
    var inputBoxContainer = document.createElement("div");
    inputBoxContainer.classList.add("inputBoxContainer");
    inputSection.appendChild(inputBoxContainer);

    var deleteBtn = document.createElement("img");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.src = "images/delete.png";
    inputBoxContainer.appendChild(deleteBtn);

    var createInputBox = document.createElement("input");
    createInputBox.type = "text";
    createInputBox.placeholder = "Input your Choices"
    createInputBox.classList.add("input-box");
    inputBoxContainer.appendChild(createInputBox);

    deleteBtn.addEventListener("click", function () {
        var parentInput = deleteBtn.parentElement;
        parentInput.remove();
        console.log("test");
    });

}

const choicesList = [];
var choiceBtn = document.querySelector("#choiceBtn");
var decisionChosen = document.querySelector("#element-decision");

choiceBtn.addEventListener("click", function () {
    decisionChosen.innerHTML = addToArray();
    mainPage1.style.display = "none";
    mainPage2.style.display = "flex";
})


function addToArray() {
    var getAllInput = document.querySelectorAll(".input-box")
    getAllInput.forEach(function (item) {
        choicesList.push(item.value);
    });
    console.log(choicesList);
    var randomizer = Math.floor(Math.random() * choicesList.length);
    console.log(randomizer);
    return choicesList[randomizer];
}

// return Button
var returnBtn = document.querySelector("#return");
returnBtn.addEventListener("click", function () {
    while (inputSection.firstChild) {
        inputSection.removeChild(inputSection.firstChild);
    }
    mainPage1.style.display = "flex";
    mainPage2.style.display = "none";
})