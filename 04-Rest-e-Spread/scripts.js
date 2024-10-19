function showList(empresa, ...clientes) {
  console.log(empresa);
  console.log(clientes);
}
showList('Origamid', 'joão', 'maria');

const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

console.log(Math.max(...numeros));

const itens = document.querySelectorAll('li');
console.log(itens); // ITENS É UMA NODE LIST: não possui funções de array

// ...TRANSFORMA NODE LIST EM ARRAY - SPRED
[...itens].map((item) => {
  console.log(item);
});

//CLONANDO OBJETOS COM SPREAD
const carro = { cor: 'azul', portas: 4, ano: 2020 };
const cloneCarro = { ...carro, turbo: true };
