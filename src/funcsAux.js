export const hacer10Fetch = async (imgUrl, x) =>{
    
    
    let promesasFetch = [];
    
    for(let j = 1; j < 36; j++){    
        let id = j + x;
        let f = fetch("https://pokeapi.co/api/v2/pokemon/"+id);
        promesasFetch.push(f);        
    }
    
    return Promise.all(promesasFetch)
                .then(resultadosFetch => {
                    let promesasJson = resultadosFetch.map(r => r.json());
                    return Promise.all(promesasJson)
                        .then(resultadoJason => resultadoJason.map(e => [e, imgUrl+padLeft(e.id,3)+".png"]));
                })
                .catch(e => console.log("Algo salio mal en las promesas:"+e))
};

function padLeft(value, length) {
    return (value.toString().length < length) ? padLeft("0" + value, length) : 
    value;
};

export default function primeraLetraMayus(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

