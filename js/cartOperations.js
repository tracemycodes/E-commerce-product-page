class CartOperation {
  constructor() {
    this.count;
  }
  minusCount(count){
    let amount = count
    if (amount >= 1) {
      amount --
    }
    this.count = amount;
  }
   plusCount(count){
    let amount = count
    if (amount >= 0) {
      amount ++
    }
    this.count = amount;
  }
  productCount(num) {
    
  }
}