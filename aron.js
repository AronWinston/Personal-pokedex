'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/aron/")
.then(response => {

    let data = response.data;
    console.log(data);

    let aronClass = document.querySelector(".aron");
    aronClass.innerHTML= `<p class="hp">HP: ${data.stats[5].base_stat}</p><p class="attack">ATTACK: ${data.stats[4].base_stat}
                            </p><p class="defense">DEFENSE: ${data.stats[3].base_stat}</p>`;




    
    


});