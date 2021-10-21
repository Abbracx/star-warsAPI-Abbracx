import { main } from './style/index.js';


let results = []
const images = [
    'luke-sky-walker.jpg',
    'C-3PO.jpg',
    'R2-D2.jpg',
    'Dart-Varder.jpg',
    'Leia-Organa.jpg',
    'OwenLars.jpg',
    'Beru-Whitesun-Lars.jpg',
    'yoda.jpg',
    'Biggs-Darklighter.jpg',
    'obi-wan-kenobi.jpg'
];
window.addEventListener("load", async () => {
  results = await main();
  notification("⌛ Loading...")
//   renderCharacters()

})


document
  .querySelector("#newCharactersBtn")
  .addEventListener("click", () => {
    notification(`🎉 You successfully Loaded "Starwars characters".`)
    renderCharacters()
});




document.querySelector("#starWarsPlace").addEventListener("click", async (e) => {
    if(e.target.className.includes("detailBtn")) {
      const name = e.target.id
      console.log(name)
       let char = results.find(_char => {
            return _char.name.startsWith(name)
        })
        document.querySelector('#charName').textContent = char.name;
        document.querySelector('#charHieght').textContent = char.height;
        document.querySelector('#charGender').textContent = char.gender;    
    }
});
  


function renderCharacters() {
    console.log(results)
    document.getElementById("starWarsPlace").innerHTML = ""
    results.forEach((_char, idx) => {
      const newDiv = document.createElement("div")
      newDiv.className = "col-md-4"
      newDiv.innerHTML = CharacterTemplate(_char, idx)
      document.getElementById("starWarsPlace").appendChild(newDiv)
    })
  }


function CharacterTemplate(_char, idx) {
return `
    <div class="card mb-4 " >  
    <div class="card-body text-left p-4 position-relative">
    <img class="card-img-top" src="./images/${images[idx]}" alt="...">
        <h2 class="card-title fs-4 fw-bold mt-2">${_char.name}</h2>
        <div class="d-grid gap-2" data-bs-toggle="modal" data-bs-target="#addModal">
        <a class="btn btn-lg btn-outline-dark detailBtn fs-6 p-3" id=${
            _char.name
        }>
        Click For Details
        </a>
        </div>
    </div>
    </div>
`
}

function notification(_text) {
    document.querySelector(".alert").style.display = "block"
    document.querySelector("#notification").textContent = _text
}


function notificationOff() {
    document.querySelector(".alert").style.display = "none"
  }