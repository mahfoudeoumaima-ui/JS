let input = document.getElementById("ajoute");
let btn = document.getElementById("add");
let list = document.querySelector(".liste");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => showTask(task));
btn.addEventListener("click", () => {
  let text = input.value.trim();
  if (text === "") return;
  showTask(text);
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
});
function showTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  let removeA = document.createElement("button");
  removeA.textContent = "remove";
  removeA.onclick = function () {
    li.remove();
    tasks = tasks.filter(t => t !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  li.appendChild(removeA);
  list.appendChild(li);
}
