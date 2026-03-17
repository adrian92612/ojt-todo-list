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

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    li.appendChild(deleteBtn);
  }
}
