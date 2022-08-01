class Products {

  handleSetLocalStorage(id) {
    const allProductsInStorage = localStorageUtil.getProducts();
    const elem = document.querySelector(`[data-mainId="${id}"]`);
    let elemCounter = elem.querySelector(".main__counter-current")
    localStorageUtil.putProduct(id, +elemCounter.innerText)
    elemCounter.innerText = "1";
    shoppingCartContainer.render()
    shoppingCartContainer.toggleCartStatus();
    shoppingCartContainer.calcCartPriceAndDelivery();
  }

  render() {
    let htmlCatalog = '';

    CATALOG.forEach(({ id, title, length, duration, price, imgSrc }) => {
      htmlCatalog += `
              <div class="main__item" data-mainId="${id}">
            <img class="main__item-img" src="img/content/${imgSrc}" alt="Vinyl">
            <div class="main__item-info">
              <h4 class="main__item-title">${title}</h4>
              <p class="main__item-length">${length} songs</p>
              <div class="main__item-details">
                <div class="main__item-counter">
                  <div class="main__counter-minus">-</div>
                  <div class="main__counter-current">1</div>
                  <div class="main__counter-plus">+</div>
                </div>
                <div class="main__item-price">
                  <div class="price__duration">${duration}</div>
                  <div class="price__currency">${price}</div>
                </div>
              </div>
              <button class="main__item-btn" onclick="productsContainer.handleSetLocalStorage(${id})">
              Add to cart
              </button>
            </div>
          </div>
    `;
    });

    const html = `
    <div class="container">
      <div class="main__box">
        <div class="main__items">
      ${htmlCatalog}
        </div>
      </div>
    </div>
    `

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsContainer = new Products();


