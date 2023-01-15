$(document).ready(function () {
  //display current date at top of page
  document.getElementById("currentDay").innerHTML = dayjs().format('MMMM / DD / YYYY');
  // pull user notes from local store
  function pullFromLocalStore() {
    var elements = document.querySelectorAll('.time-block');
    for (var i = 0; i < elements.length; i++) {
      var storedValue = JSON.parse(localStorage.getItem(JSON.stringify(elements[i].getAttribute('id'))));
      elements[i].querySelector('.description').value = storedValue;
    }
  }
  //background color class for all cards depending on time of day
  function colorTheCard() {
    var elements = document.querySelectorAll('.time-block');
    for (var i = 0; i < elements.length; i++) {
      if (Number(elements[i].getAttribute('id')) < Number(dayjs().format('H'))) {
        elements[i].classList.add("past");
      } else if (Number(elements[i].getAttribute('id')) > Number(dayjs().format('H'))) {
        elements[i].classList.add("future");
      } else {
        elements[i].classList.add("present");
      }
    }
  }
  //save user inputs to local storage
  function saveButton() {
    var elements = document.querySelectorAll('.saveBtn');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", (event) => {
        var parentDiv = event.target.parentNode;
        if (parentDiv.tagName === "BUTTON") {
          parentDiv = parentDiv.parentNode;
        }
        localStorage.setItem(JSON.stringify(parentDiv.getAttribute('id')), JSON.stringify(parentDiv.children[1].value));
      })
    }
  }
  //calls
  pullFromLocalStore();
  colorTheCard();
  saveButton();

});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.




