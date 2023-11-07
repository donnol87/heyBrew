//declaring variables from my html page

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let ingredients = document.getElementById("ingredients");

let data = {};

// build an event listener to prevent the default behaviour
//also create a variable a function name formValidation

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  
  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
  };

// here we area accepting data from input fields and we added the acceptData() function to the above function
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

// new function for creating template literals

let createPost = () => {
    ingredients.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
  input.value = "";
  };