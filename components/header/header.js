class Header {

  render() {
    const html = `
        <div class="header">
      <div class="container">
        <div class="header__top">
          <h1 class="header__title">Vinyl Records Store</h1>
          <p class="header__subitle">We bring lifelong music memories into every
            home.</p>
        </div>
      </div>
    </div>
    `
    ROOT_HEADER.innerHTML = html
  }
}
const headerContainer = new Header();
