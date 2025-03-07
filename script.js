let btn = document.querySelector("#taskBtn");
let taskInput = document.querySelector("#taskInput");
let list = document.querySelector("ul");
let taskCounter = document.querySelector("#taskCounter");
let darkBtn = document.querySelector("#darkMode");
let body = document.querySelector("body");
let titleH2 = document.querySelector("h2");


darkBtn.style.cssText = ('float: right; margin-right: 10px;');

function darkMode() {
    body.classList.add("darkModeBody");
    titleH2.classList.add("darkModeText");
    taskCounter.classList.add("darkModeText");

    const listItems = document.querySelectorAll("li");
    listItems.forEach(item => {
        item.classList.add("darkModeLists");
    });
    
    // Set flag to add class to future list items
    classifier = true;
};

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
    
    if (classifier) {
        listItem.classList.add("darkModeLists");
    }

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

darkBtn.addEventListener('click', darkMode);