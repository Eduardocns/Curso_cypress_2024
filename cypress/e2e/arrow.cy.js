
//const - Não altera o valor
//let - altera o valor

it('nada agora', function (){})

//function normal
//function soma(a,b){
 //   return a + b;
//}

//arrow function básica
const soma = (a,b) => {
    return a + b;
}

//forma reduzida
const somaReduzida = (a,b) => a + b

//Sem parâmetros
const somaSemParametros = () => 1 + 1


console.log("Forma normal " + (soma(6,2)))
console.log("Forma reduzida " + (somaReduzida(5,5)))
console.log("Sem parâmetros " + (somaSemParametros()))