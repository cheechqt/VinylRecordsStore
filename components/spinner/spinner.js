class Spinner {
  handleClearSpinner() {
    ROOT_SPINNER.innerHTML = ""  
  }

  render() {
    const html = `
    <div class="spinner-container">
      <img class="spinner__image"src="./components/spinner/img/spinner.svg">
    </div>
    `
    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerContainer = new Spinner()