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
      let collections = [new Set()]; // Use Set to make unique collection
      let totalPrice = 0;

      this.basket.map((v) => {
        // Check if there is any existing collection with size of 3 doesnt contain the element
        const bigImproveIdx = collections.findIndex((collection) => collection.size == 3 && !collection.has(v));
        if (bigImproveIdx != -1) {
          // Directly assign to the collection with size of 3
          collections[bigImproveIdx].add(v);
        } else {
          // Loop until find a collection that doesnt contain the element
          for (let i = 0; i < collections.length; i++) {
            if (collections[i].has(v)) {
              if (i == collections.length - 1) {
                collections.push(new Set([v]));
                break;
              }
            } else {
              // Create a new collection if no suitable existing collection
              collections[i].add(v);
              break;
            }
          }
        }
      });

      for (let i = 0; i < collections.length; i++) {
        const uniqueBookNumber = collections[i].size;
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
