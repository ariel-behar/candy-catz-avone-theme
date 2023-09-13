// // BSS fix mini-cart 
// if(typeof BSS_B2B){
//   const mutation = () => {
//     setTimeout(()=>{
//       const mini_cart_btn = document.querySelectorAll(".mini-products-list .qtyField");
//     console.log("mini_cart_btn:", mini_cart_btn)
//       if(mini_cart_btn.length){
//         const mutationObserver = new MutationObserver(()=>{
//           BSS_B2B.cart.fixer(JSON.parse($('#bss-b2b-store-data').html()), false, false)
//             setTimeout(() => {
//              $('.product-price[bss-b2b-cart-total-price]').show()
//             }, 1000);
//         })
//           mini_cart_btn.forEach(btn => {
//                mutationObserver.observe(btn, { childList: true, subtree: true })   
//               btn.addEventListener("click", () => {
//                   $('.product-price[bss-b2b-cart-total-price]').hide()         
//               })
//           })
//       }   
//     },1000)
//   }
//   const mini_cart_link = document.querySelector("#AddToCart-product-template");
//    mutation();
//   if(mini_cart_link){
//     mini_cart_link.addEventListener("click", () => {
//       BSS_B2B.cp.changeProductPrice(JSON.parse($('#bss-b2b-store-data').html()), false, false);
//       mutation();
//     })
//   }

// }
// BSS end fix mini-cart 

if (typeof BSS_B2B !== 'undefined' && BSS_B2B && window.location.pathname.includes("/collections")) {
    const targetDiv = document.querySelector('#Collection > div > div > div.productList > div.grid.grid--uniform.grid-products.grid--view-items');
    const observer = new MutationObserver(function(ms) {
      ms.forEach(function(m) {
        if (m.type === 'childList') {
            BSS_B2B.changeProductPriceWithInterval();
        }
      });
    });
    
    observer.observe(targetDiv, { childList: true });
}