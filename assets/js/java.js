import WomenEthnic from "./data/Womenethnic.js"
import Women from "./data/women.js"
import beauty from "./data/beauty.js"
import electronics from "./data/electronics.js"
import home from "./data/home.js"
import men from "./data/men.js"
import kits from "./data/kits.js"






let inputsearchEl = document.querySelector(".inputsearch")
let recentInput = []
let inputformEl = document.getElementById("inputform")
const listofrecentEl = document.querySelector(".listofrecent")



inputsearchEl.addEventListener("keydown", () => {
    // console.log(inputsearchEl)
    if (inputsearchEl.value) {
        document.getElementById("close").style.display = "block"
    }
    else {
        document.getElementById("close").style.display = "none"
    }
})
inputformEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofrecentHTMLEl = ""

    recentInput.unshift(inputsearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofrecentHTMLEl += `
            <div class="Recenticons">
                    <div class="recenticon"><img src="image/icon.jpg">
                    </div>
                    <p>${recentInput[i]}</p>
                   </div>
                   `

        }
        listofrecentEl.innerHTML = listofrecentHTMLEl
    }



})
// womenethic
let womenethic = document.getElementById("womenethic")
function womenethicFunc() {
    return WomenEthnic.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
womenethic.innerHTML = womenethicFunc()

// Women
let womenwestern = document.getElementById("womenwestern")
function womenwesternFunc() {
    return Women.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
womenwestern.innerHTML = womenwesternFunc()

// men
let mentype = document.getElementById("mentype")
function mentypeFunc() {
    return men.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
mentype.innerHTML = mentypeFunc()

// kits
let kitstype = document.getElementById("kitstype")
function kitstypeFunc() {
    return kits.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
kitstype.innerHTML = kitstypeFunc()

// beauty
let beautytype = document.getElementById("beautytype")
function beautytypeFunc() {
    return beauty.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
beautytype.innerHTML = beautytypeFunc()
// home
let hometype = document.getElementById("hometype")
function hometypeFunc() {
    return home.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
hometype.innerHTML = hometypeFunc()
// electron
let electronictype = document.getElementById("electronictype")
function electronictypeFunc() {
    return electronics.map(el => {
        let list = "";
list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
      <div class="column">
      <h2>${el.heading}</h4>
      ${list}
      </div>
      `
    }).join("")
}
electronictype.innerHTML = electronictypeFunc()


