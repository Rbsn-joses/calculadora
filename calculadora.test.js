// calculadora.test.js

const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test('deve somar dois números', () => {
    expect(calc.somar(1, 2)).toBe(3);
  });

  test('deve subtrair dois números', () => {
    expect(calc.subtrair(5, 2)).toBe(3);
  });

  test('deve multiplicar dois números', () => {
    expect(calc.multiplicar(3, 4)).toBe(12);
  });

  test('deve dividir dois números', () => {
    expect(calc.dividir(8, 2)).toBe(4);
  });

  test('não deve permitir divisão por zero', () => {
    expect(() => calc.dividir(8, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
