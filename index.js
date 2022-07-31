//counter
document.addEventListener("click", changeCounter)

function changeCounter(event) {
  const tgt = event.target;
  let counterTarget;
  if (tgt.classList.contains("main__counter-minus") ||
    tgt.classList.contains("main__counter-plus")) {
    const counterBlock = tgt.closest(".main__item-counter");
    counterTarget = counterBlock.querySelector(".main__counter-current");
  }

  if (tgt.classList.contains("aside__counter-minus") ||
    tgt.classList.contains("aside__counter-plus")) {
    const counterBlock = tgt.closest(".aside__item-counter");
    counterTarget = counterBlock.querySelector(".aside__counter-current");
  }

  if (tgt.classList.contains("main__counter-minus")) {
    if (counterTarget.innerText > 1) {
      counterTarget.innerText = --counterTarget.innerText;
    }
  }

  if (tgt.classList.contains("aside__counter-minus")) {
    counterTarget.innerText = --counterTarget.innerText;

    if (counterTarget.innerText === "0") {
      tgt.closest(".aside__body-item").remove();
      shoppingCartContainer.renderCartIconCounter();
      shoppingCartContainer.toggleCartStatus();
    }
    shoppingCartContainer.calcCartPriceAndDelivery();
  }

  if (tgt.classList.contains("main__counter-plus")) {
    counterTarget.innerText = ++counterTarget.innerText;
  }

  if (tgt.classList.contains("aside__counter-plus")) {
    counterTarget.innerText = ++counterTarget.innerText;
    shoppingCartContainer.calcCartPriceAndDelivery();
  }
}

//render
function render() {
  headerContainer.render();
  productsContainer.render();
  shoppingCartContainer.render()
}

spinnerContainer.render();

let CATALOG = [];

fetch("http://localhost:3000/items")
  .then(resp => resp.json())
  .then(body => {
    CATALOG = body;
    spinnerContainer.handleClearSpinner();
    render();
  })
  .catch(() => {
    spinnerContainer.handleClearSpinner();
    errorContainer.render()
  });

