class CartOperation {
  constructor(thumbnail) {
    this.count;
    this.totalAmount;
    this.lightboxCount;
    this.thumbnailIndex = 0;
    this.thumbnail = thumbnail.length;
  }
  minusCount(count) {
    let amount = count;
    if (amount >= 1) {
      amount--;
    }
    this.count = amount;
  }
  plusCount(count) {
    let amount = count;
    if (amount >= 0) {
      amount++;
    }
    this.count = amount;
  }
  productCount(num) {
    this.lightboxCount = num;
  }
  catalogCount(num) {
    this.thumbnailIndex = num;
  }
  totalPrice(price) {
    let priceAmount = parseInt(price.slice(1));

    let cummulativePrice = priceAmount * this.count;

    this.totalAmount = '$' + cummulativePrice.toString();
  }
}
