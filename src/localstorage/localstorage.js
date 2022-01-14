// use local storage as your db for now
const addToDb = data => {
    localStorage.setItem('shopping_cart', JSON.stringify(data));
}

//  get data from local storage 

const getDb = () => localStorage.getItem('shopping_cart');
const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}


const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];

    }
}



const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb, clearTheCart, getStoredCart }