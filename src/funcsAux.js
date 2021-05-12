export const hacer10Fetch = async (imgUrl, x) =>{
    
    let datass = [];
    let tupla = [];
    let fs = [];
    
    for(let j = 1; j < 11; j++){    
        let id = j + x;
        console.log("que mierda es esto"+id)
        let f = fetch("https://pokeapi.co/api/v2/pokemon/"+id)
        fs.push(f)        
    }
    
    return Promise.all(fs)
                .then(res => {
                    let js = res.map(r =>r.json())
                    return Promise.all(js).then(es =>{ 

                        es.forEach((e)=>{
                            tupla = [e, imgUrl+padLeft(e.id,3)+".png"];
                            datass.push(tupla)
                        })
                        console.log(datass)
                        return datass;
                    })
                   
                })
                            
                .catch(e => console.log("algo salio mal en las promesas:"+e))
};

function padLeft(value, length) {
    return (value.toString().length < length) ? padLeft("0" + value, length) : 
    value;
};

export default function primeraLetraMayus(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

