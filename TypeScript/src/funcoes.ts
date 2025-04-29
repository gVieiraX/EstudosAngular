//Funções
function addNumer(x:number,y:number):number{
    return x+y;
}

let soma:number  = addNumer(4,7)

console.log(soma)

function addNome(name:string):string{
    return  `Hello ${name}`
}

console.log(addNome("World"))

//Funções MultiTypes

function callToPhone(phone:number | string):number | string{
    return  phone
}

console.log(callToPhone(2))

//Funções Async

async function getDatabase(id:number):Promise<String> {
    return "id";
}