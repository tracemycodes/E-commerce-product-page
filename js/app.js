const UIminus = document.querySelector('.minus-count'),
      UIplus = document.querySelector('.plus-count'),
      UIproductCount = document.querySelector('.price-count');

// console.log(typeof UIproductCount.textContent);


const cartOperation = new CartOperation(),
      cartUI = new CartUI(UIproductCount)


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