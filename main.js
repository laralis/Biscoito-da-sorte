document.querySelector("#cookie").addEventListener("click", luck);
const main = document.querySelector("main");
const second = document.querySelector("section");
const mensage = document.querySelector("section p");
document.querySelector('section button').addEventListener('click', change)
let phrase = pickYourLuck();
function luck() {
  change();

  mensage.innerHTML = pickYourLuck();
}

function change() {
  main.classList.toggle("hide");
  second.classList.toggle("hide");
}
function pickYourLuck() {
  const number = (Math.random() * 10).toFixed(0);

  let phrase = "";
  switch (Number(number)) {
    case 0:
      phrase =
        "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.";
      break;
    case 1:
      phrase = "A vida trará coisas boas se tiver paciência.";
      break;
    case 2:
      phrase =
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.";
      break;
    case 3:
      phrase = "Não compense na ira o que lhe falta na razão.";
      break;
    case 4:
      phrase = "Defeitos e virtudes são apenas dois lados da mesma moeda.";
      break;
    case 5:
      phrase = "A maior de todas as torres começa no solo.";
      break;
    case 6:
      phrase = "Não há que ser forte. Há que ser flexível.";
      break;
    case 7:
      phrase =
        "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?";
      break;
    case 8:
      phrase =
        "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.";
      break;
    case 9:
      phrase = "A juventude não é uma época da vida, é um estado de espírito.";
      break;
    case 10:
      phrase =
        "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.";
      break;
  }
  return phrase;
}