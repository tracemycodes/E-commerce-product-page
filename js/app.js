const UIminus = document.querySelector('.minus-count'),
      UIplus = document.querySelector('.plus-count'),
      UIproductCount = document.querySelector('.price-count'),
      UIbtn = document.querySelector('.button'),
      UIthumbnail = document.querySelectorAll('.thumbnail-img'),
      lightBoxThumbnail = document.querySelector('.light-product-thumbnail');

// console.log(UIthumbnail);


const cartOperation = new CartOperation(),
      cartUI = new CartUI(UIproductCount);


UIminus.addEventListener('click', (e) => {
  e.preventDefault()
  let numberItems = Number(UIproductCount.textContent)

  cartOperation.minusCount(numberItems)
  cartUI.updateCount(cartOperation.count)
})

UIplus.addEventListener('click', (e) => {
  e.preventDefault()
  let numberItems = Number(UIproductCount.textContent)

  cartOperation.plusCount(numberItems)
  cartUI.updateCount(cartOperation.count)
})

UIbtn.addEventListener('click', (e) => {
  e.preventDefault()

  cartUI.addToCart(cartOperation.count)
})

UIthumbnail.forEach((item, index) => {
  // console.log(item);
  item.addEventListener('click', (e) => {
    document.getElementById('lightbox-product').style.display = 'flex';
    document.querySelector('.light-prev-icon').style.display = 'flex';
    document.querySelector('.light-next-icon').style.display = 'flex';

    // console.log(item, index);
    cartUI.displayLightbox(index)
    // cartOperation.productCount(index, lightBoxThumbnail.children)
  })
})




[...lightBoxThumbnail.children].forEach((item, index) => {
  // console.log(item, index);
  item.addEventListener('click', (e) => {
    e.preventDefault()
    cartUI.displayLightbox(index)
  })
})


const prevBtn = document.querySelector('.light-prev-icon')
const nextBtn =  document.querySelector('.light-next-icon');


prevBtn.addEventListener('click', (e) => {
  cartOperation.productCount(-1, lightBoxThumbnail.children)
})