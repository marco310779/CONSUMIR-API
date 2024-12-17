document.getElementById('fetch-button').addEventListener('click', fetchCharacters);  

async function fetchCharacters() {  
    const number = document.getElementById('number').value;  
    const characterContainer = document.getElementById('character-container');  
    characterContainer.innerHTML = ''; // Limpiar contenido anterior  

    try {  
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);  
        const data = await response.json();  
        // Aquí tomamos los personajes del primer número de personajes solicitado  
        const characters = data.results.slice(0, number);  
        displayCharacters(characters);  
    } catch (error) {  
        console.error('Error al obtener los datos:', error);  
        characterContainer.innerHTML = '<p>Error al cargar personajes.</p>';  
    }  
}  

function displayCharacters(characters) {  
    const characterContainer = document.getElementById('character-container');  
    characters.forEach(character => {  
        createCard(character);  
    });  
}  

function createCard(character) {  
    const card = document.createElement('div');  
    card.className = 'card';  
    card.innerHTML = `  
        <img src="${character.image}" alt="${character.name}">  
        <h2>${character.name}</h2>  
        <p>Especie: ${character.species}</p>  
        <p>Estado: ${character.status}</p>  
    `;  
    document.getElementById('character-container').appendChild(card);  
}