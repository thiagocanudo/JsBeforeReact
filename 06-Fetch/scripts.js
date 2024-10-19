// fetch() FAZ A REQUISIÇÃO E RETORNA UMA PROMESSA DE FORMA ASSINCRONA OUTRAS FUNÇÕES CONTINUAM
// then() FAZ AÇÃO QUANDO A PROMESSA É RESOLVIDA E RECEBE UMA FUNÇÃO DE CALLBACK

// const requisicao = fetch('https://ranekapi.origamid.dev/json/api/produto');
// console.log('Requisicao: ', requisicao);

// .then(function (response) {
//   console.log(response);
// })

fetch('https://ranekapi.origamid.dev/json/api/produto')
  // transforma resposta em json
  .then((response) => {
    return response.json();
  })
  // retorna o objeto final em json
  .then((jsonBody) => {
    document.querySelector('#app').innerHTML = jsonBody[0].nome;
    console.log('jsonBody:', jsonBody);
  });

// FAZENDO UM POST DE CRIAÇÃO DE USUÁRIO NA API https://ranek.origamid.dev/
const data = {
  id: 'xpto13245',
  nome: 'Thiago Lima',
  email: 'efetivelima2@gmail.com',
  senha: '212223',
  cep: '24900000',
  rua: 'Rua Um',
  numero: '01',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'RJ',
};

function cadastraUsuario() {
  return fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
