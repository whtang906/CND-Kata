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
      let combinations = [new Set()];
      let totalPrice = 0;

      this.basket.map((v) => {
        for (let i = 0; i < combinations.length; i++) {
          console.log(v, combinations[i]);
          if (combinations[i].has(v)) {
            if (i == combinations.length - 1) {
              combinations.push(new Set([v]));
              break;
            }
          } else {
            combinations[i].add(v);
            break;
          }
        }
        console.log(combinations);
      });
      for (let i = 0; i < combinations.length; i++) {
        const uniqueBookNumber = combinations[i].size;
        switch (uniqueBookNumber) {
          case 5:
          case 4:
            totalPrice += 8 * uniqueBookNumber * (1 - 0.05 * uniqueBookNumber);
            break;
          case 3:
          case 2:
          case 1:
            totalPrice += 8 * uniqueBookNumber * (1 - 0.05 * (uniqueBookNumber - 1));
            break;
        }
      }
      return totalPrice;
    }
  }
}

module.exports = Potter;
