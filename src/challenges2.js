// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let checkB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let checkC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
    return checkA && checkB && checkC;
  }

// Desafio 13
function hydrate(drink) {
  let countDrinks = drink.match(/\d+/g).map(Number);
  let water = countDrinks.reduce((a, b) => a + b, 0);
  let result = '';
  if (water === 1) {
    result = `${water} copo de água`;
  } else {
    result = `${water} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
