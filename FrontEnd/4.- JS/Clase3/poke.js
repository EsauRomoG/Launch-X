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
        pokeImage(pokeImg);
    })
}

//fetchPokemon();

const pokeImage = (url) =>{

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

