import Header from "./header.js";
import Products from "./products.js";
import searchFunc from "./search.js";

//! Add products to localstorage START

(async function() {
    const item = await fetch("../js/data.json");
    const data = await item.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    Products(data)
    searchFunc(data)
})()

//! Add products to localstorage END

//! Add cartItems to localstorage START
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : "0";

//! Add cartItems to localstorage END


//! Modal Dialog START

const modalDialogDOM = document.querySelector('.modal-dialog')
const modalContentDOM = document.querySelector('.modal-dialog .modal-content')
const btnCloseDialog = document.querySelector('.modal-dialog .modal-close')

btnCloseDialog.addEventListener('click', () => {
    modalDialogDOM.classList.remove('show')
})

setTimeout(() => {
    modalDialogDOM.classList.add('show')
}, 1500)

document.addEventListener('click', function(e) {
    if(!e.composedPath().includes(modalContentDOM) && !e.composedPath().includes(btnCloseDialog) ) {
        modalDialogDOM.classList.remove('show')
    }
})

//! Modal Dialog END