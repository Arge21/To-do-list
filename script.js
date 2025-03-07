let btn = document.querySelector("#taskBtn");
let taskInput = document.querySelector("#taskInput");
let list = document.querySelector("ul");
let taskCounter = document.querySelector("#taskCounter");
let darkBtn = document.querySelector("#darkMode");



function welcome() {
    alert('Welcome');
};

function run() {
    textInput = taskInput.value;
    taskInput.value = [];
    
    let listItem = document.createElement("li");
    let spanElement = document.createElement("span");
    let delBtn = document.createElement("button");
    

    delBtn.style.marginLeft = '10px'
    listItem.appendChild(spanElement);
    listItem.appendChild(delBtn);

    spanElement.textContent = textInput;
    delBtn.textContent = 'Delete';
    list.appendChild(listItem);

    taskCounter.textContent = 'tasks: ' + list.children.length;

    listItem.style.cursor = 'pointer'
    listItem.addEventListener ("click", () => {
        listItem.style.cssText = 'text-decoration-color: green; text-decoration-line: line-through;'
    });

    delBtn.addEventListener ("click", () => {
        list.removeChild(listItem)
        taskCounter.textContent = 'tasks: ' + list.children.length;

    });

  
    taskInput.focus()
};

btn.addEventListener('click', run);

addEventListener('load', (welcome));