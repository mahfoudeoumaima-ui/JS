let ajoute = document.getElementById("ajoute");
let add = document.getElementById("add");
let liste = document.querySelector(".liste");
let compteur = document.querySelector(".compteur");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addj() {
    let text = ajoute.value.trim();
    if (text === "") return;
    createTaskElement(text, false);
    tasks.push({ text: text, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ajoute.value = "";
}
function createTaskElement(text, done) {
    let li = document.createElement("li");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.checked = done;
    let taskText = document.createTextNode(" " + text + " ");
    let removeA = document.createElement("button");
    removeA.textContent = "Remove";
    check.addEventListener("change", function () {
        let taskObj = tasks.find(t => t.text === text);
        if (taskObj) taskObj.done = check.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateCompteur();
    });
    removeA.addEventListener("click", function () {
        liste.removeChild(li);
        tasks = tasks.filter(t => t.text !== text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateCompteur();
    });
    li.appendChild(check);
    li.appendChild(taskText);
    li.appendChild(removeA);
    liste.appendChild(li);
}
function updateCompteur() {
    let doneCount = tasks.filter(task => task.done).length;
    compteur.textContent = "tu as fini " + doneCount ;
}
function loadTasks() {
    tasks.forEach(task => {
        createTaskElement(task.text, task.done);
    });
    updateCompteur();
}
add.addEventListener("click", addj);
loadTasks();
