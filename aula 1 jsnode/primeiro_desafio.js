/*  Faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis. sendo elas:
1 - peço do combustivel;
2 - gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

*/
const peçoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorGasto = litrosConsumidos * peçoCombustivel;
console.log(valorGasto.toFixed(2));

