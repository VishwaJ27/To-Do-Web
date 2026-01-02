const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Add new task
addBtn.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerText = text;

  // Toggle completed on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete-btn";

  delBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}
