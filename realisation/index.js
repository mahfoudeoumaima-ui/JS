let input = document.getElementById("ajoute");
let btn = document.getElementById("add");
let list = document.querySelector(".liste");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => showTask(task));

btn.addEventListener("click", () => {
  let text = input.value.trim();
  if (text === "") return;
  let task = { text: text, done: false };
  showTask(task);
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
});

function showTask(task) {
  let li = document.createElement("li");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.checked = task.done;
  check.onchange = () => {
    task.done = check.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  let removeA = document.createElement("button");
  removeA.textContent = "remove";
  removeA.onclick = () => {
    li.remove();
    tasks = tasks.filter(t => t.text !== task.text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  li.appendChild(check);
  li.append(task.text);
  li.appendChild(removeA);
  list.appendChild(li);
}



