// Display current date
var today = moment();
$("#date").text(today.format("dddd MMMM Do, YYYY"));

var textInput = document.querySelector("#event");
var saveButton = document.querySelector("#save-button");

renderLastInput()

function renderLastInput() {
    var event = localStorage.getItem("event");
    if (!event) {
        return;
      }
    userEventSpan.textContent = event;
  }


  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event = document.querySelector("#event").value;
  
    if (email === "") {
      displayMessage("error", "task cannot be blank");
    } else {
      displayMessage("success", "saved successfully");
  
      localStorage.setItem("event", event);
      renderLastRegistered();
    }
  });


