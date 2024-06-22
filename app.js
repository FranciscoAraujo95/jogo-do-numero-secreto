let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // Linha de codigo para ativar a voz no site, vai ler tudo que for passar no parametro texto
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantiadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantiadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

// ----------------------------------------------------

//Hora da prática
// Criar uma função que exibe "Olá, mundo!" no console.
// function exibirOlaMundo() {
//   console.log("Olá, Mundo!");
// }

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function exibirNomeNoConsole(nome) {
//   console.log(`Olá, ${nome}`);
// }

// exibirNomeNoConsole("Francisco");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobrarNumero(numero) {
//   return numero * 2;
// }

// dobrarNumero(5);

// // // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function calcularMedia(n1, n2, n3) {
//   return (n1 + n2 + n3) / 3;
// }

// let n1, n2, n3, media;

// function calcularMediaAluno() {
//   n1 = Number(prompt("Nota 1: "));
//   n2 = Number(prompt("Nota 2: "));
//   n3 = Number(prompt("Nota 3: "));

//   media = calcularMedia(n1, n2, n3);

//   alert(`Média: ${media.toFixed(2)}`);
// }
// calcularMediaAluno();

// function verificarSituacaoAluno() {
//   if (media >= 7) {
//     if (media == 10) {
//       alert("Aprovado com nota máxima!");
//     } else {
//       alert("Aprovado");
//     }
//   } else if (media < 5) {
//     alert("Reprovado");
//   } else {
//     alert("Recuperação");
//   }
// }
// verificarSituacaoAluno();

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function retornarMaior(n1, n2) {
//   let numeroMaior = n1 > n2 ? alert(n1) : alert(n2);
//   return numeroMaior;
// }

// function quemEOMaior() {
//   let n1 = Number(prompt("N1: "));
//   let n2 = Number(prompt("N2:"));

//   retornarMaior(n1, n2);
// }
// quemEOMaior();

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function potenciar(n1) {
//   return Math.pow(n1, 2);
// }

// console.log(potenciar(4));

// function calcularMedia(n1, n2, n3) {
//   let media = (n1 + n2 + n3) / 3;
//   return media;
// }

// function verificarAprovacao(media) {
//   return media >= 5 ? "Aprovado" : "Reprovado";
// }

// function calcularIMC(peso, altura) {
//   return peso / Math.pow(altura, 2).toFixed(2);
// }

// function IMC() {
//   let peso = Number(prompt("Peso: "));
//   let altura = Number(prompt("Altura: "));

//   let imc = calcularIMC(peso, altura);
//   alert(`IMC: ${imc.toFixed(2)}`);
// }
// // IMC();

// function converterParaDolar(numero) {
//   return (numero * 4.85).toFixed(2);
// }

// function converter() {
//   let valorEmDolar = Number(prompt("Informe o valor em Dólar: "));
//   alert(`Convertido pra real fica: R$${converterParaDolar(valorEmDolar)}.`);
// }
// // converter();

// function calcularAreaRetangulo(base, altura) {
//   return base * altura;
// }

// function calcularPerimetroRetangulo(l1, l2) {
//   return l1 * 2 + l2 * 2;
// }

// function areaCirculo(pi, r) {
//   return pi * Math.pow(r, 2);
// }

// function perimetroCirculo(pi, r) {
//   return pi * 2 * r;
// }

// function mostrarTabuada(numero) {
//   let numeroInformado = numero;
//   console.log(`Tabuada do ${numeroInformado}.`);

//   let contador = 1;
//   while (contador <= 10) {
//     console.log(
//       `${numeroInformado} x ${contador} = ${numeroInformado * contador}`
//     );
//     contador++;
//   }
// }
// mostrarTabuada();

// let alunos = [
//   {
//     nome: "Francisco",
//     idade: 28,
//     sexo: "Masculino",
//     profissao: "Dev Back-End",
//   },
//   { nome: "Tici", idade: 32, sexo: "Feminino", profissao: "Técnica Bancária" },
//   { nome: "Tyrion", idade: 42, sexo: "Masculino", profissao: "Mão do Rei" },
// ];

// console.table(alunos);

// let numeros = [1, 5, 9];
// console.log(numeros[0]);

// //Trabalhando com listas (arrays - vetores)
// let linguagens = ["JavaScript", "Java", "Python"];
// //Mostra no console em formato de tabela
// console.table(linguagens);

// //Mostra o primeiro valor no console
// let primeiro = linguagens[0];
// console.log(primeiro);

// //Mostra o ultimo valor no console
// let ultimo = linguagens[linguagens.length - 1];
// console.log(ultimo);

// -------------------------------------------------------------------
//Hora da prática ARRAYS
// Crie uma lista vazia, com o nome listaGenerica.
// let listaGenerica = [];

// // Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// let linguagensDeProgramacao = ["JavaScrit", "C", "C++", "Kotlin", "Python"];

// // Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// linguagensDeProgramacao.push("Java", "Ruby", "Golang");
// console.table(linguagensDeProgramacao);
// // Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// let nomesDePessoas = ["Francisco", "Ticiana", "Sandra"];
// console.log(nomesDePessoas[0]);
// // Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// let nomesDePets = ["Luizin", "Mina", "Pipoca"];
// console.log(nomesDePets[1]);
// // Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
// let nomesDeCidades = ["London", "Dublin", "Tokyo"];
// console.log(nomesDeCidades[nomesDeCidades.length - 1]);
