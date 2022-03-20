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
  closeIcon = document.querySelector(".fa-xmark");
// console.log(closeIcon);

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

const lightThumbnail = [...lightBoxThumbnail.children];

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