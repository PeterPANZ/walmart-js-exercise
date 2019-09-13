// oSiteCatalyst.products = {
//     "prod": "", // Extract them item's productId from
//     "itemPageUrl" (the substring beginning with "prod2246...")
//     "quantity": "", // The value of "qty", converted to a
//     string
//     "shipdays": "", // The value of "minDeliveryDate",
//     converted from an epoch date to a whole number
//     "shipvalue": "", // If the item is
//     "shippingDiscountEligible", set to "free-plus"
//     "subtotal": "", // The product of "qty" and
//     "listPriceInCents", converted to a readable dollar amount
//     "uprice": "" // The value of "listPriceInCents",
//     converted to a readable dollar amount
//     };
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

const _get = require("lodash/get");

 
const qty = _get(response, "cartItems[0].qty");
const epoch = _get(response, "cartItems[0].itemInfo.minDeliveryDate");
let d = new Date(0);
d.setUTCSeconds(epoch/1000);
const priceInCents = _get(response, "cartItems[0].priceInfo.listPriceInCents");
const price = priceInCents.toLocaleString("en-US", {style:"currency", currency:"USD"});
const subtotal = (priceInCents * qty).toLocaleString("en-US", {style:"currency", currency:"USD"});

let oSiteCatalyst = { products: {} };

oSiteCatalyst.products = {
  "prod": _get(response, "cartItems[0].itemInfo.itemPageUrl").split("/").pop(), 
  "quantity": qty.toString(), 
  "shipdays": d,
  "shipvalue": _get(response, "cartItems[0].props.shippingDiscountEligible") === "true" ? "free-plus" : "",
  "subtotal": subtotal,
  "uprice": price
};

console.log(oSiteCatalyst.products.prod);
console.log(oSiteCatalyst.products.quantity);
console.log(oSiteCatalyst.products.shipdays);
console.log(oSiteCatalyst.products.shipvalue);
console.log(oSiteCatalyst.products.subtotal);
console.log(oSiteCatalyst.products.uprice);

