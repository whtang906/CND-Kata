class Potter {
  constructor(basket = []) {
    this.basket = basket;
  }

  #isBasketValid() {
    return this.basket.every((bookNumber) => Number.isInteger(bookNumber) && bookNumber >= 1 && bookNumber <= 5);
  }

  setBasket(basket) {
    this.basket = basket;
  }

  price() {
    if (!this.#isBasketValid()) {
      return 'Invalid basket, we cannot calculate the price!';
    } else {
      return this.basket.length * 8;
    }
  }
}

module.exports = Potter;
