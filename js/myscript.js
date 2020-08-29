function catchData(event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let date = document.querySelector("#date").value;
  let age = 2020 - date;

  console.log("Hi, " + name + ", you are " + age + " years old.");
}

let myForm = document.querySelector("#MyHeroForm");
myForm.addEventListener("submit", catchData);
