class CartUI {
  constructor(count) {
    this.count = count;
    this.lightProductCarousel = document.querySelector('.light-product-carousel');
  }
  updateCount(num) {
    this.count.textContent = num
    
  }
  addToCart(num) {
    document.querySelector('.item-no').textContent = num
    this.count.textContent = 0
  }
  displayLightbox(index) {
    [...this.lightProductCarousel.children].forEach(productImg => {
      productImg.classList.remove('product-active')
    })
    [...this.lightProductCarousel.children][index].classList.add('product-active')
  }
}