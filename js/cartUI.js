class CartUI {
  constructor(count) {
    this.count = count
  }
  updateCount(num) {
    this.count.textContent = num
    document.querySelector('.item-no').textContent = num.toString()
  }
}