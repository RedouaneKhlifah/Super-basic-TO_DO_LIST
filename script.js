"use strict";
const input = document.querySelector("#inputField");
const addbutton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");

addbutton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerHTML = input.value;
  toDoContainer.appendChild(paragraph);
  input.value = "";
  paragraph.addEventListener("click", function () {
    if (paragraph.style.textDecoration) {
      toDoContainer.removeChild(paragraph);
    } else paragraph.style.textDecoration = "line-through";
  });
});
