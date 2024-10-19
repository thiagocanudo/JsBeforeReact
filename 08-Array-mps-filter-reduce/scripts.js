const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meu dados',
];

// FILTER
// const precosFiltro = precos.filter((preco) => preco.includes('R$')); // ARROW FUNCTION
const precosFiltro = precos.filter(function (preco) {
  return preco.includes('R$');
});
console.log(precosFiltro);

// MAP
const precosNumero = precosFiltro.map(function (preco) {
  return Number(preco.replace('R$ ', ''));
});
console.log(precosNumero);

// REDUCE
const total = precosNumero.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(total);
