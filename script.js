"use strict";

let positions = []
let busket = {}
let cost = {}
let sum = 0;



function addToBusket(id) {
  busket[id] ? busket[id] += 1 : busket[id] = 1
  sum += cost[id]
}

function Position(id, name, cost, unit, description, category) {
  this.id = id
  this.name = name
  this.cost = cost
  this.unit = unit
  this.description = description
  this.category = category
}

function position2html(position) {
  // let result = `<div class="product product${position.id}">
  //       <img src="img/${position.id}.jpeg" alt="">
  //       <p>Предмет ${position.id}</p><button class="add-to-busket btn-position${position.id}">Добавить в корзину</button>
  //     </div>
  // `
  let button = document.createElement("button");
  button.classList.add(`btn-position${position.id}`)
  button.classList.add("button")
  button.setAttribute("onclick", `addToBusket(${position.id})`)
  button.innerHTML = "Добавить в корзину";

  // let indiv = document.createElement("div")
  // indiv.classList.add("namecost")

  let p = document.createElement("p");
  p.innerHTML = `Предмет ${position.id}`;
  // indiv.appendChild(p)

  let img = document.createElement("img");
  img.src = `img/${position.id}.jpeg`

  let div = document.createElement("div");
  div.classList.add("position");
  div.classList.add(`position${position.id}`);
  for (let i of [img, p, button]) div.appendChild(i);

  positions.assign[div]
  return div
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeLocation(planet) {
  document.getElementsByClassName("location")[0].innerHTML = `${planet}`
}

// function checkCookie() {
//   if document.cookie[]
// }

// function position2html() {
// }

// let obj = new Position(1, "n", 19, "/sm", "Hhhh", ["aaf", "ffa"])
// console.log(obj)


// console.log()