"use strict";
//Tipos primitivos: boolean,number, string
let ligado = true;
let idade = 22;
let nome = "Gabriel";
let idadesidade = 12.1;
//Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipos abrangetes: any,void
let retorno;
let qualquer = false; //Pode retornar algum valor imprevisiel,aceita qualaquer coisa
//Tipo objeto - sem previsibilidade     
let produto = {
    name: "Gabriel",
    idade: 22,
    estado: "MG"
};
let meuProduto = {
    name: "Tênis",
    preco: 30,
    disponivel: true,
};
//Arrays
let dados = ["Gabriel", "Vieira"];
let dados2 = ["Gabriel", "Vieira"];
//Array MultiTypes
let infos = ["Gabriel", true, 2];
//Tuplas
let boleto = ["agua", 11, 22];
//Métodos Arrays
dados.pop();
//Datas
let data = new Date("2025-04-29 16:02");
console.log(data.toString());
