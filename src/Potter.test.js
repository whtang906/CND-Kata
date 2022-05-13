const Potter = require('./Potter');

describe('Potter', () => {
  let potter;

  beforeEach(() => {
    potter = new Potter();
  });

  test('Test on valid declaration', () => {
    potter.setBasket([1, 3, 4]);
    expect(potter.price()).toBe(24);
  });

  test('Test on invalid declaration', () => {
    potter.setBasket([1, 3, 8]);
    expect(potter.price()).toBe('Invalid basket, we cannot calculate the price!');
  });
});
