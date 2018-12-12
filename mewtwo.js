'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo/")
.then(response => {

    let data = response.data;
    console.log(data);

    let mewtwo = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities[0].ability.name, data.abilities[1].ability.name);

        let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${mewtwo.hp}</p><p class="attack">ATTACK: ${mewtwo.attack}</p>
                                <p class="defense">DEFENSE: ${mewtwo.defense}</p><p class="skills" <strong>ABILITIES</strong></p><p class="ability">-${mewtwo.ability1}</p>
                                <p class="ability">-${mewtwo.ability2}</p>`;
    
    


});