class Footer {

  render() {
    const html = `
    <div class="footer">
      <div class="footer__container container">
        <div class="footer__content">
            <ul class="footer__items footer__items--additional">
              <li class="footer__item footer__item--bold">Shop by Type</li>
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
            <ul class="footer__items footer__items--additional">
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
            <ul class="footer__socials">
              <li class="footer__social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M28.78 22.467a6.314 6.314 0 01-6.314 6.314H9.532a6.314 6.314 0 01-6.314-6.314V9.533a6.314 6.314 0 016.314-6.314h12.934a6.314 6.314 0 016.314 6.314zM22.466 0H9.532C4.276 0 0 4.276 0 9.533v12.934C0 27.724 4.276 32 9.532 32h12.934C27.723 32 32 27.724 32 22.467V9.533C32 4.276 27.723 0 22.466 0z"></path><path d="M16 21.057a5.057 5.057 0 11-.001-10.114 5.057 5.057 0 010 10.114zm0-13.333c-4.564 0-8.277 3.712-8.277 8.276 0 4.563 3.713 8.276 8.276 8.276 4.564 0 8.276-3.712 8.276-8.276S20.563 7.724 16 7.724zM22.308 7.786a1.983 1.983 0 113.966 0 1.983 1.983 0 01-3.966 0z"></path></svg>
              </li>
              <li class="footer__social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 32"><path d="M9.924 10.485V7.728c0-.414.019-.734.057-.961.039-.227.127-.45.263-.67.136-.22.356-.372.66-.456.304-.085.709-.127 1.214-.127h2.757V0h-4.408c-2.55 0-4.382.605-5.495 1.815-1.113 1.21-1.67 2.994-1.67 5.35v3.32H.001V16h3.3v16h6.623V16h4.407l.583-5.515z"></path></svg>
              </li>
              <li class="footer__social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.59 7.71H.77a.39.39 0 00-.39.39V23.6c0 .22.18.39.39.39h4.82c.21 0 .38-.17.38-.39V8.1a.39.39 0 00-.38-.39zM3.18 0a3.18 3.18 0 10.01 6.37A3.18 3.18 0 003.18 0zM17.84 7.33c-1.93 0-3.36.83-4.23 1.78V8.1a.39.39 0 00-.39-.39H8.61a.39.39 0 00-.39.39V23.6c0 .22.17.39.39.39h4.8c.22 0 .4-.17.4-.39v-7.67c0-2.59.7-3.6 2.5-3.6 1.95 0 2.1 1.62 2.1 3.73v7.54c0 .22.18.39.4.39h4.8c.22 0 .39-.17.39-.39v-8.5c0-3.85-.73-7.78-6.16-7.78z"></path></svg>
              </li>
              <li class="footer__social footer__social--youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 5c-.8-1-2.4-1.4-5.5-1.4h-11C3.3 3.6 1.7 4 .8 5 0 6.1 0 7.7 0 9.9v4.2c0 4.2 1 6.3 6.5 6.3h11c2.7 0 4.2-.3 5.1-1.2 1-1 1.4-2.5 1.4-5.1V9.9C24 7.6 24 6 23 5zm-7.6 7.6l-5 2.6a.8.8 0 01-1.2-.7V9.3a.8.8 0 011.2-.7l5 2.6a.8.8 0 010 1.4z"></path></svg>
              </li>
              <li class="footer__social">
                <svg viewBox="4 4 42 42" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5m-3.994 18.323a7.482 7.482 0 0 1-.69.035 7.492 7.492 0 0 1-6.269-3.388v11.537a8.527 8.527 0 1 1-8.527-8.527c.178 0 .352.016.527.027v4.202c-.175-.021-.347-.053-.527-.053a4.351 4.351 0 1 0 0 8.704c2.404 0 4.527-1.894 4.527-4.298l.042-19.594h4.02a7.488 7.488 0 0 0 6.901 6.685v4.67"></path></svg>
              </li>
            </ul>
          </div>
          <form class="footer__form">
            <h3 class="footer__form-title">Get 10% Off Your First Order.</h3>
            <input class="footer__form-input" type="email" required placeholder="Your e-mail">
          </form>
        </div>
        <div class="footer__bottom">© 2022 Vinyl Records Theme. All rights reserved.</div>
      </div>
    </div>
    `

    ROOT_FOOTER.innerHTML = html;
  }
}

const footerContainer = new Footer();