//declaring variables from my html page

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let ingredients = document.getElementById("ingredients");

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
    }
  };