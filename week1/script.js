const goat = document.getElementById("goat");
goat.addEventListener("click", () => {goat.src.includes("messi.jpg") ? goat.src = "ronaldo.jpg" : goat.src = "messi.jpg";});