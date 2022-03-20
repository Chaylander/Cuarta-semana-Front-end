//fetch es la forma en la que se hace una consulta/peticion a un API

const fetchPokemon = () =>{

    limpiarDatos();//Debido a que los tipos y habilidades,estan en un array, siempre que se haga una busqueda se inicializara vacio para no encimarse

    const pokeName = document.getElementById("pokeName");//obtiene el nombre del input de texto
    let pokeInput  = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        //res arroja un status de 200, quiere decir que se encontro. Son los errores como el 404 que significa que no se encontro
        if(res.status !=200){
            console.log(res);
            pokeImage("./missingno.png")//si ponemos un pokemon o algo que no esta en la api, sale el 404
        }
        else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let peso = (data.weight)/10;
        let altura = (data.height)/10;
        let nombre = data.species.name;
        let numero = data.id//numero en la pokedex
        var estadisticas=[];

        let hp = data.stats[0].base_stat;
        let ataque = data.stats[1].base_stat;
        let defensa = data.stats[2].base_stat;
        let ataqueEsp = data.stats[3].base_stat;
        let defensaEsp = data.stats[4].base_stat;
        let velocidad = data.stats[5].base_stat
        
        for(let i=0; i<6; i++){
            estadisticas.push(data.stats[i].stat.name);       
            console.log(estadisticas) 
        }
        //console.log("stat hp: " + hp)

        //-------------------------Tipos------------------------------------
        //let tipo1 = data.types[0].type.name;
       // let tipo2 = data.types[1].type.name;
       var numerotipos = data.types.length;
        for(let i=0; i<numerotipos; i++){
            let p = document.createElement("p");
            //p.classList.add("tiposPokemon");
            p.innerHTML = data.types[i].type.name;
            console.log(p);
            pokeTipo.appendChild(p);
            console.log(pokeTipo);
           /*
            p = document.getElementById("tiposPokemon");
            p.innerHTML = data.types[i].type.name;
            console.log(p);
            */
        }
        
        //-------------------------Habilidades------------------------------------
        var numeroHabilidades = data.abilities.length;
        console.log("Habilidad(es): " + numeroHabilidades);
        //console.log(data.abilities[0].ability.name);

        for(let i=0; i<numeroHabilidades; i++){
            let p = document.createElement("p");
            //p.classList.add("tiposPokemon");
            p.innerHTML = data.abilities[i].ability.name;
            console.log(p);
            pokeHabilidad.appendChild(p);
            console.log(pokeHabilidad);
           /*
            p = document.getElementById("tiposPokemon");
            p.innerHTML = data.types[i].type.name;
            console.log(p);
            */
        }






        //----------------------------------------------------------------
        console.log("El peso del pokemon es: " + peso);
        console.log("La altura del pokemon es: " + altura);
        console.log("El nombre del pokemon es: " +nombre);
        console.log("El numero del pokemon es: " +numero);
        //console.log("Pokemon tipo1:" +tipo1);
        //console.log("Pokemon tipo2:" +tipo2);

        console.log("Tipo(s): " + numerotipos);

        console.log(pokeImg);
        pokeImage(pokeImg);
        pokePeso(peso);
        pokeAltura(altura);
        pokeNombreNumero(nombre,numero);
        pokeStats(hp, ataque, defensa, ataqueEsp, defensaEsp, velocidad);
        //poketipos(tipo);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokePeso = (value) => {
    const peso = document.getElementById("peso");
    peso.textContent = "Peso: " + value + " Kg";
}

const pokeAltura = (value) => {
    const altura = document.getElementById("altura");
    altura.textContent = "Altura: " + value + " m";
}

const limpiarDatos = () =>{ //limpia el array de tipos
    pokeTipo.innerHTML="";
    pokeHabilidad.innerHTML="habs:";
}

const pokeNombreNumero = (string,value) => {
    const nombre = document.getElementById("nombre");
    nombre.textContent = string;
    const numero = document.getElementById("numero");
    numero.textContent = "#" + value;
}

const pokeStats = (stat0, stat1, stat2, stat3, stat4, stat5) => {
    const hp = document.getElementById("hp");
    hp.textContent = "Vida: " + stat0;

    const ataque = document.getElementById("attack");
    ataque.textContent = "Ataque: " + stat1;

    const defensa = document.getElementById("defense");
    defensa.textContent = "Defensa: " +stat2;

    const ataqueEsp = document.getElementById("espAttack");
    ataqueEsp.textContent = "At. Esp: " + stat3;

    const defensaEsp = document.getElementById("espDefense");
    defensaEsp.textContent = "Def. Esp: " + stat4;

    const velocidad = document.getElementById("velocity");
    velocidad.textContent = "Velocidad.: " + stat5;


}

const pokeTipo = document.getElementsByClassName("tiposPokemon")[0];

const pokeHabilidad = document.getElementsByClassName("habilidades")[0];

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};


//pokeImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png");

/*
const imprimir = () => {
    const pokeName = document.getElementById("pokeName");//obtiene el nombre del input de texto
    let pokeInput  = pokeName.value;
    console.log("Hola :" + pokeInput);
}
*/