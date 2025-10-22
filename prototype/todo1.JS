let taches = document.querySelectorAll("input[type='checkbox']")
let compteur = document.querySelector(".compteur")
function add(){
    let faites=0;
    for(let tache of taches ) 
        if(tache.checked) faites++
    compteur.textContent = "tu as finis "  +faites +" sur " + taches.length;
}
for (let tache of taches) {
  tache.addEventListener("change", add);
});

add()

