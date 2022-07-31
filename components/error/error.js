class Error {

  render() {
    const html = `The store is closed :(<br>Please come back later`;
    ROOT_ERROR.innerHTML = `<div class="error__container">${html}</div>`
  }
}
const errorContainer = new Error();