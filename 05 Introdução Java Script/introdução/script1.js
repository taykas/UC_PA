const nome = "Thayna";
const idade = 20;

let meninas = ["thayna", "joyce", "anna"];

const teste = {
    nome: "Joyce",
    idade: 17,
    trabalho: "ETS/Bosch"
};

const thayna = {
    nome: "thayna",
    idade: 20,
    trabalho: "ETS/Bosch",
    familia: {
        pai: "Everldo",
        mae: "Eliane",
        irmao: "Kauan"
    }
}

function soma(x,y){
    return x + y;
}

const sub = function(x,y){
    return x - y;
}

const mult = (x,y) => x * y; 


console.log("o nome é: " + nome + " e a idade é " + idade);
console.log(meninas[1]);
console.log(teste.nome)
console.log(thayna.familia.irmao)
console.log(soma(10,10))
console.log(sub(1,1))
console.log(mult(1,2))
