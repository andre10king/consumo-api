async function GetCharacters(){
    try {
        const url = "https://rickandmortyapi.com/api/character";
        const response = await fetch(url);
        const json = await response.json();
        
        let html = document.getElementById("interface");

        json.results.forEach(character => {
            html.innerHTML+=`
            <div class="card m-3" style="width: 18rem;">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Origen: ${character.origin.name}</p>
                </div>
            </div>
            `;
        })

    } catch (error) {
        console.log(error)
    }
}