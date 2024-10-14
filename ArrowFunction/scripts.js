// FUNÇÃO TRADICIONAL
function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName('Guto'));

// FUNÇÃO EM EXPRESSÃO
const upperName2 = function (name) {
  return name.toUpperCase();
};
console.log(upperName2('Tigre'));

// ARROW FUNCTION
const upperName3 = (name) => {
  return name.toUpperCase();
};
console.log(upperName3('talgo'));

// ARROW FUNCTION EM UMA LINHA
// const upperName4 = (name) => name.toUpperCase();
const upperName4 = (name) => name.toUpperCase();
console.log(upperName4('tigrinho'));

// A PRINCIPAL DIFERENÇA ENTRE UMA function NORMAL E UMA ARROW FUNCTION É O CONCEITO DE THIS
// A function CRIA UM NOVO THIS PRA ELA, A arrow function MANTÉM UM ÚNICO THIS PARA O OBJETO

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    // this.menuElement.addEventListener('click', function (event) { CRIA UM NOVO THIS E A class NÃO FUNCIONA
    this.menuElement.addEventListener('click', (event) => {
      console.log(this);
      event.target.classList.toggle(this.activeClass);
    });
  }
}

const menu = new Menu('.principal');
menu.addActiveEvent();
