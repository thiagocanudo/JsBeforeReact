const data = [
  {name: "Carlos", age: 30, salary: 4000, active: true, team: "Development", bonus: 0},
  {name: "Maria", age: 25, salary: 3500, active: true, team: "Marketing", bonus: 0},
  {name: "João", age: 28, salary: 4500, active: false, team: "Sales", bonus: 0},
  {name: "Ana", age: 35, salary: 5000, active: true, team: "Human Resources", bonus: 0},
  {name: "Pedro", age: 40, salary: 6000, active: false, team: "Management", bonus: 0}
];

console.log(data);


// const application = document.querySelector('#application');
// application.innerHTML = user;


const fEach = data.forEach((value, index, array) => {
  return('value', value);
});
console.log('fEach', fEach)


const user = data.find((user) => {
  return user.age >= 30;
});
console.log('find: ', user);


const users = data.filter((user) => {
  return user.salary >= 4000 && user.active;
});
console.log('filter: ', users);


// DEVOLVE A POSIÇÃO DO ARRAY
const indexUser = data.findIndex((user) => { 
  return user.name == "Ana";
});
console.log('indexUser: ', indexUser);
data[indexUser].active = false;
console.log(data);


const usuarios = data.map((user, index) => {

  if(user.salary <= 4500){
    user.salary += 900;
    user.bonus += 1;
  }

  return{
    name: user.name,
    salary: user.salary,
    bonus: user.bonus
  }

})

console.log('map: ', usuarios);

const UserInactive = data.some((user) => {
  return user.active === false;
})

console.log('some: ', UserInactive);


const usersActive = data.every((user) => {
  return user.active === true;
});

console.log('every: ', usersActive);


const red = data.reduce((acc, user) => {
  return acc += user.salary 
}, 0);

console.log('reduce: ', red)



console.log('reverse: ', data.reverse());


  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];




  const meusLivros = livros.filter((item) => {
    return item.ano >= 1998;
  })

  console.log('meusLivros', meusLivros)



  carros = [ 
      {nome: 'ferrari', ano: 2000, qtdd: 12 },
      {nome: 'fusca', ano: 1900, qtdd: 9 },
      {nome: 'audi', ano: 2022, qtdd: 8 },
    ]


  const carro = carros.map((car) => car.qtdd >= 9 );
  console.log(carro);

  const carroFind = carros.find((car) => car.qtdd === 9);
  console.log(carroFind);

  const carFilter = carros.filter((car) => car.nome === "fusca");
  console.log(carFilter);

  const carFindIndex = carros.findIndex((car) => car.nome === "audi");
  console.log(carFindIndex)

  const carMap = carros.map((carro, index) => {
    if(carro.qtdd >= 8){
      carro.qtdd += 2;
      carro.nome += ' Turbo'
    }
    return{
      qtdd: carro.qtdd,
      nome: carro.nome,
    }
  });


  console.log(carMap)



  const precos = [
      'Crédito',
      'R$ 200',
      'R$ 300',
      'Contas a pagar',
      'R$ 300',
      'R$ 400',
      'Meus dados',
    ];


  const precosFiltro = precos.filter((price) => {
    return price.includes('R$')
  });


  const precosNumeros = precosFiltro.map((preco) => {
    return Number(preco.replace('R$ ',''));
  })

  console.log(precosFiltro)
  console.log(precosNumeros)

  const total = precosNumeros.reduce((acc, total) => {
    // console.log(acc, total);
    return acc + total;
  },0)

console.log(total)