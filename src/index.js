//desafio-felipao
//Desafio Classificador de nível de Herói
//Usar variáveis, operadores. laços de repetição, estruturas de decisão
//Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois
//utilizar uma estrutura de decisão para apresentar alguma das mensagens  sugeridas no desafio.

let nomeHeroi = "Superman"
let nivelDeExperiencia = 7500
if (nivelDeExperiencia <= 1000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Ferro.")
}else if (nivelDeExperiencia > 1000 && nivelDeExperiencia <= 2000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Bronze.")
}else if (nivelDeExperiencia >= 2000 && nivelDeExperiencia <= 5000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Prata.")
}else if (nivelDeExperiencia >= 5001 && nivelDeExperiencia <= 7000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Ouro.")
}else if (nivelDeExperiencia >= 7001 && nivelDeExperiencia <= 8000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Platina.")
}else if (nivelDeExperiencia >= 8001 && nivelDeExperiencia <= 9000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Ascendente.")
}else if (nivelDeExperiencia >= 9001 && nivelDeExperiencia <= 10000){
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Imortal.")
}else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de experiência Radiante.")
}

