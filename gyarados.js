'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/gyarados/")
.then(response => {

    let data = response.data;
    console.log(data);

    let gyarados = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.abilities[0].ability.name, data.abilities[1].ability.name);

        let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${gyarados.hp}</p><p class="attack">ATTACK: ${gyarados.attack}</p>
                                <p class="defense">DEFENSE: ${gyarados.defense}</p><p class="skills" <strong>ABILITIES</strong></p><p class="ability">-${gyarados.ability1}</p>
                                <p class="ability">-${gyarados.ability2}</p>`;

 
                            
});

let stats = document.querySelector(".poke");

let ball = document.querySelector(".ball");

window.addEventListener('click',(event)=>{

    stats.classList.toggle("reveal");


})
