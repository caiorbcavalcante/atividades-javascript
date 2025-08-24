function evenOrOdd(numero) {
    if (numero === 0){ // Tratar caso venha 0
        return "É zero";
    }
    if (numero % 2 === 0) { // Caso par
        return " É par";
    } else { // Caso ímpar
        return "É ímpar";
    }
}

//console.log(evenOrOdd(1)); Teste básico

function factorial(numero) {
    if (numero === 0){ // Tratar erro caso o número seja 0, 0! = 1
        return 1;
    }
    for (let i = numero - 1; i > 0; i--) { // Diminui o 'i' enquanto vai multiplicando e atribuindo o resultado do número principal.
        numero *= i;
    }
    return numero;
}

// console.log(factorial(5)) Teste básico

function sumArray(listaNumeros){
    resultado = 0;
    for (let i = 0; i < listaNumeros.length; i++){ // Checa a array de números inteiras baseado no tamanho e vai colocando tudo em outra variável através do índice 'i'
        resultado += listaNumeros[i];
    }
    return resultado;
}

// console.log(sumArray([1, 2])) Teste básico
