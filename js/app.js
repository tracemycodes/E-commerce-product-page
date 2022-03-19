const UIminus = document.querySelector(".minus-count"),
  UIplus = document.querySelector(".plus-count"),
  UIproductCount = document.querySelector(".price-count"),
  UIbtn = document.querySelector(".button"),
  UIthumbnail = document.querySelectorAll(".thumbnail-product"),
  lightBoxThumbnail = document.querySelector(".light-product-thumbnail"),
  prevIcon = document.querySelectorAll(".prev-icon"),
  nextIcon = document.querySelectorAll(".next-icon");
// console.log(prevIcon, nextIcon);

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
  // console.log(item);
  item.addEventListener("click", (e) => {
    document.getElementById("lightbox-product").style.display = "flex";
    document.querySelector(".light-prev-icon").style.display = "flex";
    document.querySelector(".light-next-icon").style.display = "flex";

    cartOperation.productCount(index);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});

const lightThumbnail = [...lightBoxThumbnail.children];

// console.log(lightThumbnail);

lightThumbnail.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(item, index);
    cartOperation.productCount(index);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});

prevIcon.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log("object");
    e.preventDefault();
    let presentCount;
    console.log(cartOperation.lightboxCount);
    
    if (cartOperation.lightboxCount == 0) {
      presentCount = lightThumbnail.length - 1
      // console.log(presentCount, lightThumbnail.length);
    } else {
      presentCount = cartOperation.lightboxCount - 1;
    }

    cartOperation.productCount(presentCount);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});

nextIcon.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log("object");
    e.preventDefault();
    let presentCount;
    console.log(cartOperation.lightboxCount);
    
    if (cartOperation.lightboxCount == 0) {
      presentCount = lightThumbnail.length - 1
      // console.log(presentCount, lightThumbnail.length);
    } else {
      presentCount = cartOperation.lightboxCount - 1;
    }

    cartOperation.productCount(presentCount);
    cartUI.displayLightbox(cartOperation.lightboxCount);
  });
});
