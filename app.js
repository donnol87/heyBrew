let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let beerName = document.getElementById("beerName")
let hopsInput = document.getElementById("hopsInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let close = document.getElementById("close")

//validate user input fields

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

//collect data and use local storage

let data = [];

let acceptData = () => {
  data.push({
    text: textInput.value,
    hops: hopsInput.value,
    name: beerName.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

// create new tasks using template literals

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.name}</span>
          <span class="fw">${x.text}</span>
          <span class="fw">${x.hops}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

let resetForm = () => {
  beerName.value = "";
  textInput.value = "";
  hopsInput.value ="";
  textarea.value = "";
};

// function to delete all 3 items from task array (HTML element, targeted task, & update local storage)

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};

// edit all 3 values (task, date, description inside of the array)

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  beerName.value = selectedTask.children[0].innerHTML;
  textInput.value = selectedTask.children[1].innerHTML;
  hopsInput.value = selectedTask.children[2].innerHTML;
  textarea.value = selectedTask.children[3].innerHTML;

  deleteTask(e);
};

//how to get data from local storage, even after it's deleted
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  createTasks();
})();