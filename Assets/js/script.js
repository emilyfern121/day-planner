// Display current date
var today = moment();
$("#date").text(today.format("dddd MMMM Do, YYYY"));

var textInput = document.querySelector("#task");
var saveButton = document.querySelector(".save-button");
var userTaskSpan = document.querySelector("#user-task");



renderLastInput()

function renderLastInput() {
    var task = localStorage.getItem("task");
    if (!task) {
        return;
      }
    userTaskSpan.textContent = task;
  }


  saveButtons.addEventListener("click", function(event) {
    event.preventDefault();
  
    var task = document.querySelector("#task").value;

    if (task === "") {
      prompt("error", "field cannot be blank");
    } else {
      prompt("success", "saved successfully");
  
    localStorage.setItem("task", task);
    renderLastInput();
  }
  });


