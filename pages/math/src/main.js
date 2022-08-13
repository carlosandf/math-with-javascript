// CUADRADO
console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado ** 2,
  }
}


console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

console.groupEnd();


// TRIANGULO
console.group('Triangulo');

const ladoTriangul1 = 6;
const ladoTriangul2 = 6;
const ladoTriangulBase = 6;
const alturaTriangulo = 5.5;

const prerimetroTriangulo = ladoTriangul1 + ladoTriangul2 + ladoTriangulBase;

const areaTriangulo = (ladoTriangulBase * alturaTriangulo) / 2;

function calcularTriangulo(ladoA, ladoB, base, altura) {
  return {
    perimetro: ladoA + ladoB + base,
    area: (base * altura) / 2,
  }
}

console.log({
  ladoTriangul1,
  ladoTriangul2,
  ladoTriangulBase,
  alturaTriangulo,
  prerimetroTriangulo,
  areaTriangulo,
});

console.groupEnd();