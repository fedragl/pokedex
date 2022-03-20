//programacion asincrona
const fetchPokemon = () => {
    const pokename = document.getElementById("pokename");
    let pokeinput=pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeimage("");
        }else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokeimg=data.sprites.front_default;
        let pokenameS=data.name;
        let poketype=data.types[0].type.name;
        let stats=data.stats;
        pokeimage(pokeimg,pokenameS,poketype, stats)
    });
}
//fetchPokemon();

const pokeimage = (url,name,type,stats) =>{
    const pokeimg=document.getElementById("pokeimg");
    const pokenameS=document.getElementById("pokenameS");
    const poketype=document.getElementById("poketype")
    const hp=document.getElementById("stats_hp")
    const attack=document.getElementById("stats_attack")
    const defense=document.getElementById("stats_defense")
    const special=document.getElementById("stats_special_attack")
    const speciald=document.getElementById("stats_special_defense")
    const speed=document.getElementById("stats_speed")
    pokeimg.src = url;
    pokenameS.innerHTML = name;
    poketype.innerHTML="Type: "+type;
    hp.innerHTML="HP: "+ stats[0].base_stat;
    attack.innerHTML="ATTACK: "+ stats[1].base_stat;
    defense.innerHTML="DEFENSE: "+ stats[2].base_stat;
    special.innerHTML="SPECIAL ATTACK: "+ stats[3].base_stat;
    speciald.innerHTML="SPECIAL DEFENSE: "+ stats[4].base_stat;
    speed.innerHTML="SPEED: "+ stats[4].base_stat;

}