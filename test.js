// let string = "The quick brown fox jumps over the lazy dog";
// string = string.split(' ');
// string.forEach((substr,i) => {
//     return string[i] = substr + (i + 1);
// });
// string = string.join(' ');

let str = "The quick brown fox jumps over the lazy dog";
const arr = str.split(" ");
const ans = arr.map((val, index) => (val += index + 1)).join(" ");
return ans;



// string = string.split(" ");
// let stringArray = new Array();
// for(let i =1; i <= string.length; i++){
//     stringArray.push(string[i - 1] + i);
// }
// let result = stringArray.join(' ');
// console.log(string);

// let dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
// let result = dwarves.split(' ').reverse().join(' ');


// function numToMonth (num) {
// 	let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   return month[num - 1];
// }


// let re = new RegExp(/(.*\d.*)/);

// function checkEqual(arr1, arr2) {
//     return JSON.stringify(arr1) === JSON.stringify(arr2);
// }
// function arraysIsEqual(arr1, arr2) {
//     if(arr1.length !== arr2.length)
//         return false;
//     for(let i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i])
//             return false;
//     }

//     return true;
// }


    var response = {
    "cartItems": [{
    "id": "ci186012014536",
    "qty": 3,
    "itemInfo": {
    "model": "UN55NU6950FXZA",
    "itemNo": "980142010",
    "minDeliveryDate": 1561938400000,
    "name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K(2160p) Ultra HD Smart LED TV",
    "skuId": "sku23018986",
    "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
    },
    "inventoryInfo": {
    "minQtyLimit": -1,
    "lowStockLevel": 5,
    "maxQtyLimit": -1,
    "itemLowInStockFlag": false,
    "stockLevel": "inStock"
    },
    "priceInfo": {
    "mapPriceInCents": 0,
    "listPriceInCents": 44900,
    "shippingAmountInCents": 0,
    "shippingAmount": 0,
    "originalPrice": 0,
    "itemTotalInCents": 44900,
    "totalMapPrice": 0,
    "originalPriceInCents": 0,
    "salesTax": 3500
    },
    "props": {
    "selectedChannel": "ONLINE",
    "shippingChargeIncluded": false,
    "shippingDiscountEligible": true,
    "freeShipEligible": false,
    "specialItem": false,
    "weightedItem": false,
    "onlineChannelMinLimitQty": -1,
    }
    }]
    };

    
    // function setValue(obj1, obj2) {
    //     let str1 = obj2.cartItems[0].itemInfo.itemPageUrl;
    //     obj1.prod = str1.substring(str1.search('prod2246'));
    //     obj1.quantity = obj2.cartItems[0].qty.toString();
    //     let epoch = obj2.cartItems[0].itemInfo.minDeliveryDate;
    //     let d = new Date(0);
    //     d.setUTCSeconds(epoch/1000);
    //     obj1.shipdays = d;
    //     obj1.shipvalue = obj2.cartItems[0].props.shippingDiscountEligible? "free-plus" :null;
    //     obj1.subtotal = (obj2.cartItems[0].qty * obj2.cartItems[0].priceInfo.listPriceInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"});
    //     obj1.uprice = (obj2.cartItems[0].priceInfo.listPriceInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"});
    // }
    // setValue(oSiteCatalyst.products, response);

import _get from "lodash/get";
 
const qty = _get(response, "cartItems[0].qty");
const epoch = _get(response, "cartItems[0].itemInfo.minDeliveryDate");
let d = new Date(0);
d.setUTCSeconds(epoch/1000);
const priceInCents = _get(response, "cartItems[0].priceInfo.listPriceInCents");
const price = priceInCents.toLocaleString("en-US", {style:"currency", currency:"USD"});
const subtotal = price * qty;

let oSiteCatalyst = { products: {} };

oSiteCatalyst.products = {
  "prod": _get(response, "cartItems[0].itemInfo.itemPageUrl").split("/").pop(), 
  "quantity": qty.toString(), 
  "shipdays": d,
  "shipvalue": _get(response, "cartItems[0].props.shippingDiscountEligible") === "true" ? "free-plus" : "",
  "subtotal": subtotal,
  "uprice": price
};
