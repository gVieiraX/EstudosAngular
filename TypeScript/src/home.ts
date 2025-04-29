    //Tipos primitivos: boolean,number, string
let ligado:boolean = true
let idade:number = 22
let nome:string = "Gabriel"
let idadesidade = 12.1

//Tipos especiais: null, undefined
let nulo:null = null
let indefinido:undefined = undefined    

//Tipos abrangetes: any,void
let retorno:void 
let qualquer:any = false //Pode retornar algum valor imprevisiel,aceita qualaquer coisa

//Tipo objeto - sem previsibilidade     
let produto:object = {
    name:"Gabriel",
    idade:22,
    estado:"MG"
};

//Objeto tipado com previsibilidade
type produtoLoja = {
    name:string;
    preco:number;
    disponivel:true
};

let meuProduto:produtoLoja = {
    name: "Tênis",
    preco: 30,
    disponivel: true,
}

//Arrays
let dados: string[]= ["Gabriel","Vieira"];
let dados2: Array<string>= ["Gabriel","Vieira"];

//Array MultiTypes
let infos: (string | number | true)[] =["Gabriel",true, 2]

//Tuplas
let boleto: [string,number,number] = ["agua",11,22]

//Métodos Arrays
dados.pop()

//Datas

let data: Date = new Date("2025-04-29 16:02");
console.log(data.toString())