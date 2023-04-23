const add_btn = document.getElementsByClassName('add-btn');
console.log(add_btn);

cart = [];

for(let i = 0; i < add_btn.length; i++){
    add_btn[i].addEventListener('click', (e) => {
    const product = e.target.parentElement;
    const clone = product.cloneNode(true);

        document.getElementById('cart').appendChild(clone);
        
    })
}



function addToCart(){

     cart = cart.append(cart);
};
