// Exercício 1: Arrow Function com um parâmetro
// Crie uma arrow function chamada dobro que recebe um número e retorna o dobro dele.
// Dica: Não use {} nem return, pois a função pode ser simplificada.
const dobro = x => x * 2;
console.log(dobro(5));  // 10
console.log(dobro(24)); // 48


// Exercício 2: Arrow Function com múltiplos parâmetros
// Crie uma arrow function chamada dividir que recebe dois números e retorna o resultado da divisão do primeiro pelo segundo.
const dividir = (a, b) => a / b;
console.log(dividir(20, 10)); // 2
console.log(dividir(4, 2));  // 2


// Exercício 3: Arrow Function com múltiplas linhas
// Crie uma arrow function chamada mensagemBoasVindas que recebe um nome e retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!".
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("Milly")); // "Seja bem-vindo, Milly!"
console.log(mensagemBoasVindas("Aline"));    // "Seja bem-vindo, Aline!"


// Exercício 4: Higher-Order Function personalizada
// Crie uma função chamada executarOperacao que recebe três parâmetros: dois números e uma função que representa uma operação matemática (adição, subtração, multiplicação ou divisão).
// Em seguida, chame essa função passando diferentes operações matemáticas como arrow functions.
const executarOperacao = (a, b, operacao) => operacao(a, b);
console.log(executarOperacao(10, 2, (a, b) => a - b)); // 8
console.log(executarOperacao(9, 4, (a, b) => a * b)); // 36


// Exercício 5: map() – Transformação de um array
// Crie um array de preços de produtos e use o método map() para aplicar um desconto de 10% em cada preço.
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]


// Exercício 6: filter() – Filtrando valores em um array
// Crie um array com idades e use o método filter() para retornar apenas as idades menores que 18 anos.
const idades = [11, 72, 23, 94, 1, 8];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [11, 1, 8]


// Exercício 7: reduce() – Somando valores de um array
// Crie um array com números e use o método reduce() para calcular o produto (multiplicação de todos os números).
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
