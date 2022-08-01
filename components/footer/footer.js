class Footer {

  render() {
    const html = `
    <div class="footer">
      <div class="footer__container container">
        <div class="footer__content">
            <ul class="footer__items">
              <li class="footer__item footer__item--title">Shop by Type</li>
              <li class="footer__item">All Record Players</li>
              <li class="footer__item">Premiere</li>
              <li class="footer__item">Record Store</li>
              <li class="footer__item">Accessories</li>
              <li class="footer__item">Bluetooth Speakers</li>
              <li class="footer__item">Radios</li>
              <li class="footer__item">Outdoor Speakers</li>
              <li class="footer__item">Jukebox</li>
              <li class="footer__item">Gift Cards</li>
            </ul>
            <ul class="footer__items">
              <li class="footer__item footer__item--bold">Shop by Style</li>
              <li class="footer__item">Wood</li>
              <li class="footer__item">Retro</li>
              <li class="footer__item">Modern</li>
              <li class="footer__item">Farmhouse</li>
              <li class="footer__item">Suitcase</li>
            </ul>
          <div class="footer__items-box">
            <ul class="footer__items">
              <li class="footer__item footer__item--bold">About Victrola</li>
              <li class="footer__item footer__item--bold">Contact Us</li>
              <li class="footer__item footer__item--bold">Support</li>
              <li class="footer__item footer__item--bold">Press</li>
              <li class="footer__item footer__item--bold">Careers</li>
              <li class="footer__item footer__item--bold">Blog</li>
              <li class="footer__item footer__item--bold">Returns</li>
              <li class="footer__item footer__item--bold">Reviews</li>
            </ul>
            <div class="footer__socials">
              <img class="footer__social" src="" alt="">
              <img class="footer__social" src="" alt="">
              <img class="footer__social" src="" alt="">
              <img class="footer__social" src="" alt="">
              <img class="footer__social" src="" alt="">
            </div>
          </div>
          <form class="footer__form">
            <h3 class="footer__form-title">Get 10% Off Your First Order.</h3>
            <input class="footer__form-input" type="email" required>
          </form>
        </div>
        <div class="footer__bottom">© 2021 Goldish Theme. All rights reserved.</div>
      </div>
    </div>
    `

    ROOT_FOOTER.innerHTML = html;
  }
}

const footerContainer = new Footer();