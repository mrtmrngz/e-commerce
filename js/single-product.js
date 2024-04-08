import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentFunc from "./single-product/comment.js";


const productId = localStorage.getItem("productId")
    ? JSON.parse(localStorage.getItem("productId"))
    : localStorage.setItem('productId', JSON.stringify(1));

const products = localStorage.getItem("products")
? JSON.parse(localStorage.getItem("products"))
: localStorage.setItem('products', JSON.stringify([]));


const findProduct = products.find((item) => item.id === Number(productId))


//* Product Title 
const productTitle = document.querySelector('.product-title')
productTitle.innerHTML = findProduct.name


//* Product Prices 
const oldPriceDOM = document.querySelector('.old-price')
const newPriceDOM = document.querySelector('.new-price')
oldPriceDOM.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`
newPriceDOM.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`

//* Product Gallery 

const singleImageDOM = document.querySelector('#single-image')

singleImageDOM.src = `./${findProduct.img.singleImage}`


//* Thumbs 
const galleryThumbs = document.querySelector('.gallery-thumbs')
let result = ""

findProduct.img.thumbs.forEach(item => {
    result += `
        <li class="glide__slide">
            <img src="./${item}" class="img-fluid">
        </li>
    `
})

galleryThumbs.innerHTML = result
singleThumbs()
thumbsActiveFunc()


const productThumbItem = document.querySelectorAll('.product-thumb .glide__slide img')

productThumbItem[0].classList.add('active')


//* add to cart

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const findCart = cart.find(item => item.id === Number(findProduct.id))
const btnAddToCart = document.getElementById('add-to-cart')
const quantityDOM = document.getElementById('quantity')
let cartItems = document.querySelector(".header-cart-count");

if(findCart) {
    btnAddToCart.setAttribute('disabled', 'disabled')
}else {
    btnAddToCart.addEventListener('click', () => {
        cart.push({...findProduct , quantity: Number(quantityDOM.value)})
        localStorage.setItem('cart', JSON.stringify(cart))
        btnAddToCart.setAttribute('disabled', 'disabled')
        cartItems.innerHTML = cart.length
    })
}
