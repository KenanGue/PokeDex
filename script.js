allPokemons = [
    {
        "url": "https://pokeapi.co/api/v2/pokemon/",
        "name": [],
        "sprites.front_default": [],
        "types[0].type.name": []
    }
];


async function fetchData(){
   try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    let data = await response.json();
showPokeCard(data);
    console.log(data);
   } catch (error) {
    console.error('Fehler beim abrufen der API', error);
   }
}

function showPokeCard(data) {
    let pokeCard = document.getElementById('poke-card');
let name = data.name;
let img = data.sprites.front_default;
let type = data.types[0].type.name;
    pokeCard.innerHTML = `
                <div class="poke-item">
                    <p>${name}</p>
                    <img src="${img}">
                    <p>${type}</p>
                </div>
                 `;
}

