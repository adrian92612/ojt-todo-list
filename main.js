const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("todo-list");

button.addEventListener("click", handleClick);

function handleClick() {
  const value = input.value;

  if (value !== "") {
    const li = document.createElement("li");

    li.textContent = value;

    list.appendChild(li);

    input.value = "";

    const checkBtn = document.createElement("check_button");
    checkBtn.textContent = "✓";

    li.appendChild(checkBtn);

    const deleteBtn = document.createElement("delete_button");
    deleteBtn.textContent = "✗";

    li.appendChild(deleteBtn);
  }
}
