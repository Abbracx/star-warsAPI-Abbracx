
async function main(){
    const path = 'https://swapi.dev/api/people'
    const datum = await getAPI(path)
    if(datum instanceof Array){
        return datum.map(
           (data) =>{
               const {name, gender, height} = data;
               return {name, gender, height}
           });       
    }
   return {};
}

//Get api request

async function getAPI (args){
    let response, parsed = ''
    try {
        response = await fetch(args);
        parsed = await response.json();
    } catch (error) {
        console.log(error)
    }
    return parsed['results'];
 }
   
 
export {main};