let shoppingItems = [
  {
    name: "socks",
    price: 12
  },
  {
    name: "mobile",
    price: 20000
  },
  {
    name: "laptop",
    price: 80000
  }, 
  {
    name: "bulb",
    price: 100
  }
];

// pluck("price")


function pluck(item) {
    if(item){
        return shoppingItems.map((el) => el[item])
    }else{
        return shoppingItems;
    }    
}
// console.log("all items :", pluck("name"));

// Total
function Total() {
    return shoppingItems.reduce((a, b) => a + b.price, 0);
}
// console.log("total :", Total());

// Discount(10)
function Discount(discount) {
    return Total() - (Total() * discount / 100);
}
// console.log("discount :", Discount(10));

// tax(18.5)
function tax(val) {
    return Total() + (Total() * val / 100); 
}
// console.log("tax :", tax(18.5));

// deliverTo(TN, country)
function deliverTo(state, country){
    return {state: state, country: country}
}
// console.log(deliverTo("TN", "India"));

let final = () => {
    return {
        allItems: pluck("price"),
        total: Total(),
        discount: Discount(10),
        tax: tax(18.5),
        deliverTo: deliverTo("TN", "India"),
    }
}

console.log(final());









