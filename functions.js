// Arrow Functions e Higher-Order Functions no JavaScript

// O que são Arrow Functions?
/*As Arrow Functions foram introduzidas no ECMAScript 6 (ES6), lançado em 2015. Elas representam uma sintaxe mais curta e concisa para escrever funções em JavaScript. Além disso, as arrow functions não possuem seu próprio this, o que pode evitar problemas comuns ao trabalhar com funções dentro de objetos e classes.*/

// Sintaxe da Arrow Function:
// Antes do ES6, as funções eram escritas com a palavra-chave function:
const soma = function(a, b) {
    return a + b;
};
console.log(soma(2, 3)); // 5

// Com as Arrow Functions, podemos reescrever esse código de forma mais concisa:
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

// Principais Características das Arrow Functions:
// Se a função tiver apenas um parâmetro, os parênteses são opcionais:
const quadrado = x => x * x;
console.log(quadrado(4)); // 16

// Se houver múltiplos parâmetros, os parênteses são obrigatórios:
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

// Se houver mais de uma linha no corpo da função, é necessário usar {} e a palavra-chave return explicitamente:
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("João")); // "Olá, João!"

// As arrow functions não possuem seu próprio this, herdando o this do escopo onde foram declaradas. Isso evita problemas comuns ao usar funções em eventos e objetos.


// Higher-Order Functions (Funções de Alta Ordem)
/*No JavaScript, uma Higher-Order Function (HOF) é uma função que recebe outra função como argumento e/ou retorna uma função como resultado. Essas funções permitem criar código mais modular e reutilizável.*/

// Exemplo de Higher-Order Function:
// Antes do ES6:
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}
function somar(x, y) {
    return x + y;
}
console.log(aplicarOperacao(5, 3, somar)); // 8

// Com Arrow Functions, podemos simplificar ainda mais:
const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 3, (x, y) => x + y)); // 8
console.log(aplicarOperacao(10, 2, (x, y) => x * y)); // 20

// Exemplos comuns de Higher-Order Functions no JavaScript:

// Várias funções da API do JavaScript utilizam esse conceito, como map(), filter() e reduce().
// map() – Transforma um array aplicando uma função em cada elemento:
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]17/02/2025 - Nivelamento JavaScript (Parte 2) 

// filter() – Retorna um novo array apenas com os elementos que atendem a uma condição:
const idades = [10, 22, 30, 15, 18];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [22, 30, 18]

// reduce() – Reduz um array a um único valor:
const valores = [10, 20, 30, 40];
const soma = valores.reduce((total, num) => total + num, 0);
console.log(soma); // 100
