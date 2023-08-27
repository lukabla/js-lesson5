// const conteiner = document.querySelector(".conteiner");
const body = document.querySelector("body");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  button.remove();
});
const section = document.querySelector(".first");
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8 "
);
img.setAttribute("alt", "old man in street");
img.classList.add("body-img");
section.append(img);

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

const list = document.querySelector("#characters-list");

function cards() {
  const html = characters
    .map((el) => {
      return `<div class="card">
                <div class="info">
                    <h2 class="name">${el.first_name} ${el.last_name}</h2>
                    <h3 class="house">house: ${el.house}</h3>
                     <h4 class="actor">${el.actor}</h4>
                    <div class="buttons">
                        <button class="button-if">info</button> 
                        <button class="button-dlt">delete</button>  
                    </div>
                </div>
                <img class="char-img" src="${el.image}" alt="${el.actor}"/>
            </div>`;
    })
    .join(" ");
  list.innerHTML = html;

  const btnIf = document.querySelectorAll(".button-if");
  const btDlt = document.querySelectorAll(".button-dlt");

  btnIf.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(btn);
      const card = btn.closest(".card");
      card.querySelector(".actor").classList.toggle("show");
    });
  });

  btDlt.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = btn.closest(".card");
      card.remove();
    });
  });
}
cards();
