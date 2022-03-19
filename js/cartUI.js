class CartUI {
  constructor(count) {
    this.count = count;
    this.lightProductCarousel = document.querySelector('.light-product-carousel').children;
  }
  updateCount(num) {
    this.count.textContent = num
    
  }
  addToCart(num) {
    document.querySelector('.item-no').textContent = num
    this.count.textContent = 0
  }
  displayLightbox(index) {
    const lightProductItems = [...this.lightProductCarousel]
    lightProductItems.forEach(productImg => {
      productImg.classList.remove('product-active')
    })
    // console.log(lightProductItems, index);
    lightProductItems[index].classList.add('product-active')
  }
}