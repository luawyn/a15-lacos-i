// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let pergunta
let conta = 0
const precoCoxinha = 2.5

while (true) {
  pergunta = prompt('Deseja mais coxinha?\nS - Sim\nN - Não').toUpperCase()
  if (pergunta === 'S') {
    conta += precoCoxinha
  } else if (pergunta === 'N') {
    console.log('O valor total da conta: ' + conta)
    break
  } else {
    alert('Digite um caractere válido.')
  }
}
