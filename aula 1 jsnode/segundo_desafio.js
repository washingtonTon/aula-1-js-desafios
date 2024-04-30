/* faça um programa para calcular o valor de uma viagem.


Você tera 3 variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de gombustivel que está no seu carro;
4 - Gasto médio de combustivel por KM;
5 - Ditância em KM da viagem;

Imprima no console o valor que será gasto pra realizar esta viagem.

*/

const precoDoEtanol = 3.40;
const precoDaGasolina = 5.19;
const KmPorLitros = 10;
const distanciaEmKm = 1580;
const tipoDecombustivelUsado = 'Gasolina';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoDecombustivelUsado === 'Etanol') {
    const valorGasto = litrosConsumidos * precoDoEtanol;

    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoDaGasolina;

    console.log(valorGasto.toFixed(2));

}
