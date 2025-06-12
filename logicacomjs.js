/*let number1 = 10;
let number2 = 30;
let som = number1 + number2
console.log("A soma é "+ som)
console.log("---------------------")

let number3 = 20;
let number4 = 50;
let sub2 = number3 - number4
console.log("A soma é "+ sub2)
console.log("---------------------")

let number5 = 70;
let number6 = 90;
let mult = number5 * number6
console.log(" A soma é "+ mult)
console.log("----------------------")

let number7 = 60;
let number8 = 40; 
let div = number7/ number8
console.log(" A soma é " + div)
console.log("------------------------")*/

/*let nome = "Lyann Max"
let salario =  1.518;
let mesestrab = 11;
let resultado = salario/12*mesestrab
console.log ("Parabéns "+ nome+" seu decimo é: R$"+ resultado)
let salario =  prompt("Digite o seu salario")
let mesestrab = prompt("Coloque seus meses trabalhados")
let resultado = salario/12*mesestrab
console.log ("Parabéns seu 13° é " +  resultado.toFixed(0))
var salario = prompt("Digite seu salario"){
var salario novo = porcentagem/porcento*salario+salario
}
if (se o salario<R$500,00"){
    var salarionovo
    console.log("Seu reajuste vai sar de 15%")
}

else if (De R$500,00 até 1000,00){
    console.log("Seu salario recebeu um reajuste de 10%")
}
else{
    console.log("Seu salario recebeu um reajuste de 5%")
}

let idade = prompt ("Digite aqui sua idade:")
if (idade<12) {
    alert ("Assista conteúdo infantil")
}
else if (idade>=12 && idade<=17){
    alert ("Assista conteúdo teen")
}
else if (idade>=18 && iadede<=60){
    alert ("Assista conteúdo Adulto")

}
else {
    alert("Assista conteudo Sênior")
}

let pontuacao = prompt ("Digite sua pontuação:")
if (pontuacao<=1000){
    alert ("Seu nível é de Novato e seu bônus de xp é de 100")

}
else if (pontuacao>=1001 && pontuacao<=5000){
    alert ("Seu nível é de um Aprendiz e seu bônus de xp é de 500")
}
else if (pontuacao>=5001 && até <=10000){
    alert ("Seu nível é de um Expert e seu bônus de xp é de 1000")
}
else { alert ("Acima de 10000 seu nível é de Mestre e seu bônus de xp é de 2000")
}

let valorbasico = 25;
let valorpremium = 40;
let valorultra = 60;
telasde1a2 = 0;
let telas3a4 = 5;
let telasmaisde4 = 7;
let tipodeassinatura = prompt ("Digite o tipo de assinatura: ")
 let telas = prompt ("Quantas telas deseja?")
 
 if (tipodeassinatura == "basico"){
    if ( telas>=1 && telas<=2){
        alert ("O valor do seu pacote sera de R$:" + valorbasico+telasde1a2)
    }
    if (tipodeassinatura == "premium")
     if (telas >=3 && telas <=4){
alert ("O valor do seu pacote sera de" + premium+telas3a4oumais)
    }
}

let daysOfWeek = ["Caio", "Samuel"];
console.log (daysOfWeek[1])
console.log (daysOfWeek.length)
let listdiver = ["Caio",1,2.5, "Escola", false]
console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno: ")
daysOfWeek.push(nomedoaluno)
console.log (daysOfWeek)

let daysOfWeek = ["Caio", "Samuel"];
console.log (daysOfWeek[1])
console.log (daysOfWeek.length)
let listdiver = ["Caio",1,2.5, "Escola", false]
console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno: ")
daysOfWeek.unshift("Caique", "Lyann", "Clara")
daysOfWeek.push(nomedoaluno)
daysOfWeek.unshift(Fábio)
daysOfWeek.shift()
console.log("Os alunos da escola são: "+daysOfWeek)

let daysOfWeek = ["Caio", "Samuel"];
console.log (daysOfWeek[1])
console.log (daysOfWeek.length)
let listdiver = ["Caio",1,2.5, "Escola", false]
console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno: ")
daysOfWeek.unshift("Caique", "Lyann", "Clara")
daysOfWeek.push(nomedoaluno)
daysOfWeek.unshift("Richard")
daysOfWeek.shift() 
daysOfWeek.sort // bota em ordem alfabetica ou númerica (ordem das letras do alfabeto A a Z)
daysOfWeek.reverse// bota de tras pra frente
console.log("Os alunos da escola são: "+daysOfWeek)
console.log(daysOfWeek.indexOf("Samuel"))

const alunos = ["Ana","Bruno","Carlos", "Diana"];
for (const aluno of alunos){
    console.log("Olá, "+ aluno+ "!");
}

let number = Number (prompt("Digite o número que deseja somar aos anteriores:"))
let numberfinal =0
while (number != 0){
    Number (prompt("Digite o número que deseja somar aos anteriores:"))
    numberfinal = numberfinal+number
}
console.log("O número final é: "+numberfinal)

for (let i = 1; i <= 10; i++){
    console.log(i);
}
function saudar(){
 alert ("Seja Bem-Vindo ao sistema")
}


function dobrarNumero(numero){
    return numero * 2; }
 let resultado = dobrarNumero(20);
alert("O resultado é: " + resultado)*/
/*function cumprimentar(nome){
   alert("Oi"+nome+"tenha um excelente dia!")
}
let nomedeusuario = prompt ("Digite seu nome")*/
function contagemRegressiva(numero){
   alert(numero);
   if (numero ===0){
   alert("Chegou!");
return;}
contagemRegressiva(numero-1)
}
contagemRegressiva(5)