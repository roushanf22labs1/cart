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
  
  // pluck("price")  pluck("name")
  function pluck(item) {
    return (val) =>{
      var arr = val.map((el) => el[item])
    //   console.log(arr)
      return [val,arr]  
    }
  }
  // console.log("all items :", pluck("name"));
  
  // Total
  function Total(val) {
      return [val[0].reduce((a, b) => a + b.price, 0), val[1]];
  }
  // console.log("total :", Total());
  
  // Discount(10)
  function Discount(discount) {
      return [discount[0] - (discount[0]/100 - 10), discount[1]];
  }
  // console.log("discount :", Discount(10));
  
  // tax(18.5)
  function tax(val) {
      return [val[0] + (val[0]/100 - 18), val[1]]; 
  }
  // console.log("tax :", tax(18.5));
  
  // deliverTo(TN, country)
  function deliverTo(state, country){
    return (val) =>{
        return {allItems: val[1], tax: '', discount: '', state: state, country: country, total: ~~val[0]}
    }
  }
  // console.log(deliverTo("TN", "India"));
  
const pipe = (...fns)=> (x)=> fns.reduce((v, f) => f(v), x);

console.log(pipe(pluck('name'), Total, Discount, tax, deliverTo("TN", "India"))(shoppingItems));

  
  
  
  
  
  
  
  
  
  