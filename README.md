# Funções Utilitárias em JavaScript

Este repositório contém três funções básicas em JavaScript:  
- Verificar se um número é par, ímpar ou zero  
- Calcular fatorial  
- Somar elementos de um array  

---

## 🚀 Como usar
1. Copie as funções para o seu arquivo `.js`.
2. Adicione chamadas de teste no final do arquivo.
3. Execute com Node.js:
   ```bash
   node index.js
📌 Funções

1. evenOrOdd(numero)

Retorna se o número é par, ímpar ou zero.
function evenOrOdd(numero) {
    if (numero === 0) {
        return "É zero";
    }
    if (numero % 2 === 0) {
        return "É par";
    } else {
        return "É ímpar";
    }
}

// Exemplos
console.log(evenOrOdd(0)); // "É zero"
console.log(evenOrOdd(4)); // "É par"
console.log(evenOrOdd(7)); // "É ímpar"

2. factorial(numero)

Calcula o fatorial de um número inteiro.

Observação: por definição, 0! = 1.
function factorial(numero) {
    if (numero === 0) {
        return 1;
    }
    for (let i = numero - 1; i > 0; i--) {
        numero *= i;
    }
    return numero;
}

// Exemplos
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120

3. sumArray(listaNumeros)

Recebe um array de números e retorna a soma de todos os elementos.
function sumArray(listaNumeros) {
    let resultado = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        resultado += listaNumeros[i];
    }
    return resultado;
}

// Exemplos
console.log(sumArray([1, 2, 3]));      // 6
console.log(sumArray([10, 20, 30]));   // 60
console.log(sumArray([-1, 5, -3, 7])); // 8
