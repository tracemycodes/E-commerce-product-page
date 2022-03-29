const UIminus = document.querySelector(".minus-count"),
  UIplus = document.querySelector(".plus-count"),
  UIproductCount = document.querySelector(".price-count"),
  UIbtn = document.querySelector(".button"),
  UIthumbnail = document.querySelectorAll(".thumbnail-product"),
  lightBoxThumbnail = document.querySelector(".light-product-thumbnail"),
  lightPrevIcon = document.querySelector(".light-prev-icon"),
  lightNextIcon = document.querySelector(".light-next-icon"),
  prevIcon = document.querySelector(".prev-icon"),
  nextIcon = document.querySelector(".next-icon"),
  closeIcon = document.querySelector(".close-icon"),
  menuBtn = document.querySelector('.menu-btn'),
  menuCloseBtn = document.querySelector('.menu-close'),
  shopCart = document.querySelector('.cart-item');
console.log(shopCart);

const lightThumbnail = [...lightBoxThumbnail.children];

// console.log(UIthumbnail);

const cartOperation = new CartOperation(UIthumbnail),
  cartUI = new CartUI(UIproductCount);

UIminus.addEventListener("click", (e) => {
  e.preventDefault();
  let numberItems = Number(UIproductCount.textContent);

  cartOperation.minusCount(numberItems);
  cartUI.updateCount(cartOperation.count);
});

UIplus.addEventListener("click", (e) => {
  e.preventDefault();
  let numberItems = Number(UIproductCount.textContent);

  cartOperation.plusCount(numberItems);
  cartUI.updateCount(cartOperation.count);
});

UIbtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartUI.addToCart(cartOperation.count);
});

UIthumbnail.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    document.getElementById("lightbox-product").style.display = "flex";
    document.querySelector(".light-prev-icon").style.display = "flex";
    document.querySelector(".light-next-icon").style.display = "flex";

    cartOperation.productCount(index);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});


lightThumbnail.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    cartOperation.productCount(index);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});

lightNextIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let presentCount;
  if (cartOperation.lightboxCount >= lightThumbnail.length - 1) {
    presentCount = 0;
  } else {
    presentCount = cartOperation.lightboxCount + 1;
  }
  cartOperation.productCount(presentCount);
  cartUI.displayLightbox(cartOperation.lightboxCount);
});

lightPrevIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let presentCount;
  if (cartOperation.lightboxCount == 0) {
    presentCount = lightThumbnail.length - 1;
  } else {
    presentCount = cartOperation.lightboxCount - 1;
  }
  cartOperation.productCount(presentCount);
  cartUI.displayLightbox(cartOperation.lightboxCount);
});

prevIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let presentCount;

  if (cartOperation.thumbnailIndex == 0) {
    presentCount = lightThumbnail.length - 1;
  } else {
    presentCount = cartOperation.thumbnailIndex - 1;
  }

  cartOperation.catalogCount(presentCount);
  cartUI.thumbnailBox(cartOperation.thumbnailIndex);
});

nextIcon.addEventListener("click", (e) => {
  console.log("object");
  e.preventDefault();
  let presentCount;
  if (cartOperation.thumbnailIndex >= lightThumbnail.length - 1) {
    presentCount = 0;
  } else {
    presentCount = cartOperation.thumbnailIndex + 1;
  }
  cartOperation.catalogCount(presentCount);
  cartUI.thumbnailBox(cartOperation.thumbnailIndex);
});

closeIcon.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById("lightbox-product").style.display = "none";
})

menuBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.side-navbar').classList.add('active-sidebar');
})

menuCloseBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.side-navbar').classList.remove('active-sidebar');
})

shopCart.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.cart-modal').classList.toggle('cart-active');



  let itemCost = document.querySelector('.product-price').textContent;

  cartOperation.totalPrice(itemCost)
  cartUI.cartboxModal(itemCost, cartOperation.count, cartOperation.totalAmount)

  // console.log(itemCost);
})