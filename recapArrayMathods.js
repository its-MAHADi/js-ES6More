const producTs = [
    {id: 1,name: "iphone",color: "black",price: 1200,brand: "apple"},
    {id: 2,name: "xiaomi",color: "gold",price: 100,brand: "xiaomi"},
    {id: 3,name: "samsung",color: "gold",price: 1500,brand: "sam"},
    {id: 4,name: "iphone",color: "gold",price: 1000,brand: "apple"},
    {id: 5,name: "xiaomi",color: "black",price: 1100,brand: "xiaomi"},

];


//jegular brand apple ase tader price barabo
// const neWproduct = producTs.map(p => {
//     if (p.brand ==="apple") {
//         p.price = p.price + 100
//     }
//     return p;
// })

// console.log(neWproduct);




//foreach return kore na
// producTs.forEach(producTs => {
//     if (producTs.brand ==="apple") {
//         console.log(producTs)
//     }
// })


//find just 1 ta and 1st ta
// const singleProduct = producTs.find(p => p.id === 3);
// console.log(singleProduct)


//filter
const newProducts2 = producTs.filter(p=>p.name === "iphone")
// console.log(newProducts2)
