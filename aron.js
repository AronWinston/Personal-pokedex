'use strict'

axios.get("https://pokeapi.co/api/v2/pokemon/aron/")
.then(response => {

    let data = response.data;
    console.log(data);

    let aron = new Pokemon ( data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name, data.abilities[2].ability.name);

    let pokeClass = document.querySelector(".poke");
            pokeClass.innerHTML=`<p class="hp">HP:  ${aron.hp}</p><p class="attack">ATTACK: ${aron.attack}</p>
                                <p class="defense">DEFENSE: ${aron.defense}</p><p class="skills" <em>ABILITIES</em></p><p class="ability">-${aron.ability1}</p>
                                <p class="ability">-${aron.ability2}</p><p class="ability">-${aron.ability3}</p>`;
    
    


});

let stats = document.querySelector(".poke");

let ball = document.querySelector(".ball");

window.addEventListener('click',(event)=>{

    stats.classList.toggle("reveal");


})
