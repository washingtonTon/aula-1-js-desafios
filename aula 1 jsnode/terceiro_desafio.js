/*  1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a 
    sua media e a sua classificacão conforme a tabela abaixo.

    Média = (nota 1 nota 2 nota 3) / 3;

    Classificacão:
  - media wance que 5, recuperação;
  - Media entre 5 e 7, recuperação;
  - Media acima de 7, passou de semestre;
*/



const nota1 = 5.3;
const nota2 = 5.1;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2))

if (media < 5) {
    console.log('recuperação');
} else if (media >= 5 && media <= 7) {
    console.log('recuperação');

} else {
    console.log('passou de semestre');
}


