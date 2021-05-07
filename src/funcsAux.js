export const traerInfo = async () => {
    let datas = [];
    let tupla = [];
    const imgUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
    
    for(let j = 1; j < 152; j++){    
        try{
            
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+j);
            let data = await response.json();
            tupla = [data, imgUrl+padLeft(j,3)+".png"];
            datas.push(tupla);
        } catch(err){
            console.log("Error");
        }
    }
    return datas;
}

function padLeft(value, length) {
    return (value.toString().length < length) ? padLeft("0" + value, length) : 
    value;
};

export default function primeraLetraMayus(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};