async function fetchData() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=250');
    let data = await response.json();
    console.log(data);
    showPokeCard(data.results);
}


async function showPokeCard(pokemons) {
    let pokeCard = document.getElementById('poke-card');
    pokeCard.innerHTML = '';

    for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        let response = await fetch(pokemon.url);
        let pokeData = await response.json();

        pokeCard.innerHTML += await loadHTML(pokemon, pokeData);
    }
}

function loadHTML(pokemon, pokeData) {

    let pokeName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);
    let pokeImg = pokeData.sprites.other['official-artwork'].front_default;
    let pokeTypes = pokeData.types.map(typeInfo => typeInfo.type.name);
    let mainType = pokeTypes[0];
    let typeBackgroundColor = pokeTypes.map(type => `<p class="type-border">${type}</p>`).join('');

    return `
    <div class="poke-item type-${mainType}">
        <h6>${pokeName}</h6>
        <img src="${pokeImg}" class="poke-image">
       <div class="type-position">
        <p>${typeBackgroundColor}</p>
        </div>
    </div>
    
    `;
}