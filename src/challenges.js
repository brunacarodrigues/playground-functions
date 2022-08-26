// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
}

// Desafio 4
function concatName(string) {
  let firstName = string[0];
  let lastName = string[string.length -1];
  let result = lastName + ", " + firstName;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let numMaior = array[0];
  let index = 0;
  let count = 0;

  for (let index in array) {
    if (array[index] > numMaior) {
      numMaior = array[index];
    }
  }
  for (let index2 in array) {
    if (array[index2] === numMaior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return "cat1";
  } else if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let strings = [];
  for (let index in array) {
      if (array[index] % 5 === 0 && array[index] % 3 === 0) {
          strings.push("fizzBuzz");
       } else if(array[index] % 5 === 0) {
          strings.push("buzz");
       } else if(array[index] % 3 === 0) {
          strings.push("fizz")
       }
       else{
          strings.push("bug!");
      }
  }
  return strings;
}

// Desafio 9
function encode(encodeString) {
  let newEncode = encodeString.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return newEncode;
}
function decode(decodeString) {
  let newDecode = decodeString.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
  return newDecode;
}

// Desafio 10
function techList(tech, name) {
  let listTec = [];
  tech.sort();
  if (tech.length === 0) {
    return "Vazio!";
  }
  for (let index of tech) {
    let objList = {
      tech: index,
      name: `${name}`
    }
    listTec.push(objList);
  }
  return listTec;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
