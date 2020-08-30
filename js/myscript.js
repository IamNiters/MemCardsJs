let paquetCarte = ["🦄", "🐹", "🐼", "🐞", "🐷", "🐱", "🦊", "🐵"];

function melangeur() {
  let heroGameSection = document.querySelector("#HeroGameSection");
  heroGameSection.innerHTML = "";

  paquetCarte.forEach(function (element) {
    let carte = document.createElement("div");
    carte.innerHTML =
      "<div class='HeroCard'>" +
      "<div class='HeroCardContent'>" +
      element +
      "</div>";
    ("</div>");
    heroGameSection.appendChild(carte);
  });
}

melangeur();
