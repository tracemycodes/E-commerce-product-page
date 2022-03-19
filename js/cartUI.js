class CartUI {
  constructor(count) {
    this.count = count
  }
  updateCount(num) {
    this.count.textContent = num
    
  }
  addToCart(num) {
    document.querySelector('.item-no').textContent = num
    this.count.textContent = 0
  }
}