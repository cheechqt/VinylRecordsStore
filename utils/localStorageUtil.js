class LocalStorageUtil {

  constructor() {
    this.keyName = "vinylProducts"
  }

  getProducts() {
    const localStotageProducts = localStorage.getItem(this.keyName);
    if (localStotageProducts !== null) {
      return Array.from(JSON.parse(localStotageProducts))
    } else {
      return []
    }
  }

  putProduct(id, count) {
    const products = this.getProducts();
    const productObj = { id, count };

    let indexInStorage = -1;
    products.forEach(obj => {
      if (obj.id == id) {
        indexInStorage = products.indexOf(obj)
      }
    })

    if (indexInStorage !== -1) {
      let obj = products[indexInStorage];
      obj.count += count;
      products[indexInStorage] = obj
      localStorage.setItem(this.keyName, JSON.stringify(products));
    } else {
      products.push(productObj)
      localStorage.setItem(this.keyName, JSON.stringify(products));
    }
    // return { products, productObj, indexInStorage }
  }

  removeProduct(indexInStorage) {
    let products = this.getProducts();
    products.splice(indexInStorage, 1)
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }
}

const localStorageUtil = new LocalStorageUtil();

// localStorageUtil.putProduct("41", 42)
// const a = localStorageUtil.getProducts()
// console.log(a);