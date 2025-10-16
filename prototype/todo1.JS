const taches = document.querySelectorAll(".tache");
    const compteur = document.getElementById("compteur");

    function updateCompteur() {
      let faites = 0;
      for (let tache of taches) {
        if (tache.checked) faites++;
      }
      compteur.textContent = "Tu as terminé " + faites + " sur " + taches.length + "tâches";
    }

    for (let tache of taches) {
      tache.addEventListener("change", updateCompteur);
    }

    updateCompteur();