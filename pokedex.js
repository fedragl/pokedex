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
        let pokemoves = data.moves;
        pokemoves=pokemoves.length;
        
        const moves_array=[];

        for(let i=0; i<pokemoves; i++){
            moves_array.push(data.moves[i].move.name);
        }

        pokeimage(pokeimg,pokenameS,poketype, stats,moves_array);
    });
}
//fetchPokemon();

const pokeimage = (url,name,type,statsS, movesa) =>{
    const pokeimg=document.getElementById("pokeimg");
    const pokenameS=document.getElementById("pokenameS");
    const poketype=document.getElementById("poketype");
    const stats=document.getElementById("stats");
    const moves=document.getElementById("moves")

    pokeimg.src = url;
    pokenameS.innerHTML = name;
    poketype.innerHTML="Type: "+type;
    stats.innerHTML="HP: "+ statsS[0].base_stat +
    "\n ATTACK: "+ statsS[1].base_stat +
    "\n DEFENSE: "+ statsS[2].base_stat +
    "\n SPECIAL ATTACK: "+ statsS[3].base_stat +
    "\nSPECIAL DEFENSE: "+ statsS[4].base_stat +
    "\nSPEED: "+ statsS[4].base_stat;
    moves.innerHTML=movesa;

}