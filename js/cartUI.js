class CartUI {
  constructor(count) {
    this.count = count;
    this.lightProductCarousel = document.querySelector('.light-product-carousel').children;
    this.thumbnailIndex = document.querySelector('.thumbnail-Index').children;
  }
  updateCount(num) {
    this.count.textContent = num
    
  }
  addToCart(num) {
    document.querySelector('.item-no').textContent = num
    this.count.textContent = 0
  }
  displayLightbox(index) {
    let lightProductItems = [...this.lightProductCarousel]
    lightProductItems.forEach(productImg => {
      productImg.classList.remove('product-active')
    })
    lightProductItems[index].classList.add('product-active')
  }
  thumbnailBox(index) {
    let thumbnailProductItems = [...this.thumbnailIndex]
    thumbnailProductItems.forEach(productImg => {
      productImg.classList.remove('product-active')
    })
    thumbnailProductItems[index].classList.add('product-active')
  }
}