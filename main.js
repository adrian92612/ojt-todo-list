const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("todo-list");

button.addEventListener("click", handleClick);

function checkTodo(span) {
  span.style.textDecoration = "line-through";
}

function deleteTodo(list) {
  list.remove();
}

function handleClick() {
  const value = input.value;

  if (value !== "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = value;
    li.appendChild(span);
    list.appendChild(li);

    input.value = "";

    const checkBtn = document.createElement("check_button");
    checkBtn.textContent = "✓";

    const deleteBtn = document.createElement("delete_button");
    deleteBtn.textContent = "✗";

    checkBtn.addEventListener("click", () => checkTodo(span));
    deleteBtn.addEventListener("click", () => deleteTodo(li));

    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
  }
}
