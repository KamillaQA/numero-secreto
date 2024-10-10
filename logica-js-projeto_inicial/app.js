// 1. Exibir uma mensagem de boas-vindas com console.log
console.log("Bem-vindo ao nosso programa!");
// 2. Criar uma variável chamada "nome" e exibir "Olá, [seu nome]!" no console
let nome = 'Kamilla';
console.log("Olá, " + nome + "!");
// 3. Criar uma variável chamada "nome" e exibir "Olá, [seu nome]!" com alert
alert(`Olá, ${nome}!`);
// 4. Perguntar ao usuário sobre a linguagem de programação favorita
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem de programação que você mais gosta é:${linguagem}`);
// 5. Realizar a soma de dois valores e exibir o resultado
let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma do ${valor1} e ${valor2} é igual a ${resultado}.`);
// 6. Realizar a subtração de dois valores e exibir o resultado
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a  ${resultado}.`);

// 7. Verificar se o usuário é maior ou menor de idade
let idade = prompt(`Qual é a sua idade ${nome}?`);
if (idade >= 18 ){
    console.log('Obba, você é maior de idade!');
}else{
    console.log('Ops, ainda falta um pouco para alcançar a maior idade');
}

// 8. Verificar se um número é positivo, negativo ou zero
let numero = prompt("Digite um número:");
numero = Number(numero); 
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 9. Imprimir números de 1 a 10 com while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 10. Verificar se a nota é "Aprovado" ou "Reprovado"
let nota = 8;  // Atribua a nota desejada
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Gerar um número aleatório com Math.random
let aleatorio = Math.random();
console.log("Número aleatório gerado: " + aleatorio);

// 12. Gerar um número inteiro entre 1 e 10 com Math.random
let numeroEntre1e10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório entre 1 e 10: " + numeroEntre1e10);

// 13. Gerar um número inteiro entre 1 e 1000 com Math.random
let numeroEntre1e1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatório entre 1 e 1000: " + numeroEntre1e1000);


let numeroSecreto = parseInt(Math.random()* numerMaximo +1);
let chute;
let tentativas = 1;
numerMaximo = 5000; 
console.log(numeroSecreto);
while (numeroSecreto != chute){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute){
        break;
    }else{
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que o chute`);
        }else{
            alert(`O numero secreto é menor que o chute`);
    }
    tentativas++;
}}
let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa' //operador ternário
alert(`Isso ai, você descobriu ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1) {
    alert(`Isso ai, você descobriu ${numeroSecreto} com ${tentativas} tentativas.`);
}
else {
    alert(`Isso ai, você descobriu ${numeroSecreto} com ${tentativas} tentativa.`);
}*/





