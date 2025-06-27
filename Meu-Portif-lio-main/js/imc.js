function calcularIMC(){


    /* Obtém o valor do campo de entrada com o ID "peso" e o converte para um número decimal */
    const peso = parseFloat(document.getElementById("peso").value);




    /* Obtém o valor do campo de entrada com o ID "altura" e o converte para um número decimal */
    const altura = parseFloat(document.getElementById("altura").value);




    /* Obtém o elemento HTML com o ID "resultado", onde o texto do resultado será exibido */
    const resultado = document.getElementById("resultado");




    /* Verifica se os valores de peso e altura são válidos (maiores que zero) */
    if (peso > 0 && altura > 0){




    /* Calcula o IMC usando a fórmula: peso dividido pela altura ao quadrado */
        const imc = peso / (altura * altura);




        /* Inicializa a variável para armazenar a classificação do IMC */
        let classificacao = "";




        /* Determina a classificação do IMC com base em faixas de valores */
        if (imc < 18.5) classificacao = "Abaixo do peso";
         else if (imc < 24.9) classificacao = "Peso normal";
         else if (imc < 29.9) classificacao = "Sobrepeso";
         else classificacao = "Obesidade";




        /* Exibe o IMC calculado e sua classificação no elemento "resultado" */
        resultado.textContent = `IMC: ${imc.toFixed(2)} (${classificacao})`;


    }


    else
    {
        /* Caso os valores de peso ou altura sejam inválidos, exibe uma mensagem de erro */


        resultado.textContent = "Por favor, digite valores válidos";


    }
}






