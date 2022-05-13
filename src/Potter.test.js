const Potter = require('./Potter');

describe('Potter', () => {
  let potter;

  beforeEach(() => {
    potter = new Potter();
  });

  test('Test on invalid basket', () => {
    potter.setBasket([1, 3, 8]);
    expect(potter.price()).toBe('Invalid basket, we cannot calculate the price!');
  });

  test('Test on basic basket', () => {
    potter.setBasket([]);
    expect(potter.price()).toBe(0);
    potter.setBasket([1]);
    expect(potter.price()).toBe(8);
    potter.setBasket([2]);
    expect(potter.price()).toBe(8);
    potter.setBasket([1, 1, 1]);
    expect(potter.price()).toBe(24);
  });

  test('Test on basic basket', () => {
    potter.setBasket([1, 2]);
    expect(potter.price()).toBe(8 * 2 * 0.95);
    potter.setBasket([1, 3, 5]);
    expect(potter.price()).toBe(8 * 3 * 0.9);
    potter.setBasket([1, 2, 3, 4]);
    expect(potter.price()).toBe(8 * 4 * 0.8);
    potter.setBasket([1, 2, 3, 4, 5]);
    expect(potter.price()).toBe(8 * 5 * 0.75);
  });
});
