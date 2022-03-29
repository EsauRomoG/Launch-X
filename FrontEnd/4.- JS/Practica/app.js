const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    //API y promesas 
    fetch(url).then((res) => {

        if(res.status != 200){
            
            console.log(res);
            pokeImage("./img/pokemon-sad.gif");
        
        }else{

            return res.json();

        }
        

    }).then((data) =>{
        
        let pokeImg = data.sprites.front_default;
        let pokeNa = data.name;
        let pokeid = data.id;
        pokeImage(pokeImg, pokeNa, pokeid);

        let pokehp = data.stats[0].base_stat;
        let pokeatk = data.stats[1].base_stat;
        let pokedef = data.stats[2].base_stat;
        pokeStats(pokehp, pokeatk, pokedef);

        let pokemov1 = data.moves[0].move.name;
        let pokemov2 = data.moves[1].move.name;
        let pokemov3 = data.moves[2].move.name;
        pokeMoves(pokemov1, pokemov2, pokemov3);

        let poketype1 = data.types[0].type.name;
        pokeType(poketype1);
    })
}

const pokeType = (type1) =>{

    const t1 = document.querySelector('.type1');
    t1.textContent = type1;
};

const pokeMoves = (mov1, mov2, mov3) =>{

    const pokemov1 = document.querySelector('.mov1');
    pokemov1.textContent = mov1;

    const pokemov2 = document.querySelector('.mov2');
    pokemov2.textContent = mov2;

    const pokemov3 = document.querySelector('.mov3');
    pokemov3.textContent = mov3;

};

const pokeStats = (hp, atk, def) =>{

    const pokehp = document.querySelector('.hp1');
    pokehp.textContent = hp;

    const pokeAtk = document.querySelector('.atk1');
    pokeAtk.textContent = atk;

    const pokedef = document.querySelector('.def1');
    pokedef.textContent = def;

};

//fetchPokemon();

const pokeImage = (img, nombre, idPoke ) =>{

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = img;
        
    const nombrePoke = document.querySelector('.nombrePoke');
    nombrePoke.textContent = nombre;
    
    const nume = document.querySelector('.num');
    nume.textContent = '#';
    
    const id = document.querySelector('.idPoke');
    id.textContent = idPoke;
}

