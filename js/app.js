const UIminus = document.querySelector('.minus-count'),
      UIplus = document.querySelector('.plus-count'),
      UIproductCount = document.querySelector('.price-count'),
      UIbtn = document.querySelector('.button'),
      UIthumbnail = document.querySelectorAll('.thumbnail-img');

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

UIthumbnail.forEach(item => {
  // console.log(item);
  item.addEventListener('click', (e) => {
    document.getElementById('lightbox-product').style.display = 'flex';
    document.querySelector('.light-prev-icon').style.display = 'flex';
    document.querySelector('.light-next-icon').style.display = 'flex';

    // console.log(document.querySelector('.light-next-icon'));
  })
})