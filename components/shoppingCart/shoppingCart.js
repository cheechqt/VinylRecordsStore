class ShoppingCart {

  renderCartIconCounter() {
    const counter = document.querySelector(".cart-icon__counter");
    counter.innerText = localStorageUtil.getProducts().length;
  }

  handleToggleCartVisibility() {
    const popup = document.querySelector(".popup");
    popup.classList.toggle("popup--hidden");
    document.body.classList.toggle("noscroll");
  }

  handleMinusCountInStorage(id, count, indexInStorage) {
    if (count > 1) {
      localStorageUtil.putProduct(id, -1);
    } else {
      localStorageUtil.removeProduct(indexInStorage)
    }
    shoppingCartContainer.toggleCartStatus()
  }

  handlePlusCountInStorage(id) {
    localStorageUtil.putProduct(id, 1);
  }

  calcCartPriceAndDelivery() {
    const allItems = document.querySelectorAll(".aside__body-item");
    const deliveryElem = document.querySelector(".shipping-cost");
    let price = 0;
    let deliveryPrice = 0;

    allItems.forEach((item) => {
      const count = +item.querySelector(".aside__counter-current").innerText;
      const currency = +item.querySelector(".aside__item-currency").innerText.slice(1);
      price += (count * currency)
    })
    if (price > 60) {
      deliveryPrice = 0;
      document.querySelector(".shipping-text").innerText = "Shipping"
      deliveryElem.innerText = "FREE"
    } else {
      deliveryPrice = 40;
      document.querySelector(".shipping-text").innerText = "Shipping"
      deliveryElem.innerText = "$40.00"
    }
    if (price == 0) {
      document.querySelector(".total-cost").innerText = "$00.00";
      deliveryElem.innerText = ""
      document.querySelector(".shipping-text").innerText = ""
    } else {
      price += deliveryPrice
      document.querySelector(".total-cost").innerText = "$" + price.toFixed(2)
    }
  }

  toggleCartStatus() {
    const emptyCart = document.querySelector(".aside__body-empty-cart");
    const orderBlock = document.querySelector(".aside__form");
    const icon = document.querySelector(".cart-icon");

    if (document.querySelector(".aside__body-item")) {
      emptyCart.style.display = "none";
      orderBlock.style.display = "block"
      icon.classList.remove("cart-icon--hidden")
    } else {
      emptyCart.style.display = "block";
      orderBlock.style.display = "none";
      icon.classList.add("cart-icon--hidden")
      localStorageUtil.clearStorage();
    }
  }

  // render() {
  //   const productsStore = localStorageUtil.getProducts();
  //   let htmlCatalog = '';


  //   CATALOG.forEach(({ id, title, length, duration, price, imgSrc }) => {
  //     let indexInStorage = -1;

  //     productsStore.forEach(obj => {
  //       if (obj.id == id) {
  //         indexInStorage = productsStore.indexOf(obj);
  //       }
  //     })

  //     if (indexInStorage !== -1) {
  //       const count = productsStore[indexInStorage].count
  //       htmlCatalog += ` <div class="aside__body-item" data-id="${id}">
  //             <img class="aside__item-img" src="img/content/${imgSrc}" alt="album cover"></img>
  //             <div class="aside__item-description">
  //               <h6 class="aside__item-title">${title}</h6>
  //               <div class="aside__item-subtitle">${length} / ${duration}</div>
  //               <div class="aside__item-details">
  //                 <div class="aside__item-counter">
  //                   <div class="aside__counter-minus" onclick="shoppingCartContainer.handleMinusCountInStorage(${id},${count},${indexInStorage})">-</div>
  //                   <div class="aside__counter-current">${count}</div>
  //                   <div class="aside__counter-plus" onclick="shoppingCartContainer.handlePlusCountInStorage(${id})">+</div>
  //                 </div>
  //                 <div class="aside__item-currency">${price}</div>
  //               </div>
  //             </div>
  //           </div>`
  //     }
  //   })
  render() {
    const products = localStorageUtil.getProducts();
    let htmlCatalog = '';

    
    products.forEach(({ id, count }, indexInStorage) => {

      const { title, length, duration, price, imgSrc } = CATALOG.find(item => item.id == id);

          htmlCatalog += ` <div class="aside__body-item" data-id="${id}">
              <img class="aside__item-img" src="img/content/${imgSrc}" alt="album cover"></img>
              <div class="aside__item-description">
                <h6 class="aside__item-title">${title}</h6>
                <div class="aside__item-subtitle">${length} / ${duration}</div>
                <div class="aside__item-details">
                  <div class="aside__item-counter">
                    <div class="aside__counter-minus" onclick="shoppingCartContainer.handleMinusCountInStorage(${id},${count},${indexInStorage})">-</div>
                    <div class="aside__counter-current">${count}</div>
                    <div class="aside__counter-plus" onclick="shoppingCartContainer.handlePlusCountInStorage(${id})">+</div>
                  </div>
                  <div class="aside__item-currency">${price}</div>
                </div>
              </div>
            </div>`
    })

    const html = `
    <div class="cart-icon cart-icon--hidden" onclick="shoppingCartContainer.handleToggleCartVisibility()">
      <img class="cart-icon__img" src="./components/shoppingCart/img/cart-icon.png" alt="cart">
      <div class="cart-icon__counter">${localStorageUtil.getProducts().length}</div>
    </div>

    <div class="popup popup--hidden">
    <div class="popup__body" onclick="shoppingCartContainer.handleToggleCartVisibility()">
    <div class="popup__content" onclick="event.stopPropagation()">
    <button class="popup__close" href="" onclick="shoppingCartContainer.handleToggleCartVisibility()">X</button>
            <div class="aside">
          <div class="aside__container">
            <div class="aside__body">
              <h5 class="aside__body-title">Your Cart</h5>
              <div class="aside__body-empty-cart">Your shopping cart is empty</div>
              <div class="aside__body-items">
              ${htmlCatalog}
              </div>
              <div class="aside__body-total">
                <p>
                  <span class="shipping-text"></span>
                  <span class="shipping-cost"></span>
                </p>
                <p>
                  <span class="total-text">Total:</span>
                  <span class="total-cost">$00.00</span>
                </p>
              </div>
            </div>
            <div class="aside__form">
              <h5 class="aside__form-title">Place an order</h5>
              <form>
                <input class="aside__form-input" placeholder="Your email"
                  type="email" required>
                <button type="submit" class="aside__form-btn">Order now</button>
              </form>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    `

    ROOT_SHOPPING_CART.innerHTML = html;

    shoppingCartContainer.toggleCartStatus();
    shoppingCartContainer.calcCartPriceAndDelivery();
    document.querySelector(".aside").addEventListener("click", changeCounter)
  }
}

const shoppingCartContainer = new ShoppingCart();


