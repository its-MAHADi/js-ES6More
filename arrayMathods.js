const products = [
    {id: 1,name: "iphone",color: "black",price: "1200",brand: "apple"},
    {id: 2,name: "xiaomi",color: "gold",price: "100",brand: "xiaomi"},
    {id: 3,name: "samsung",color: "gold",price: "1500",brand: "sam"},
    {id: 4,name: "iphone",color: "gold",price: "1000",brand: "apple"},
    {id: 5,name: "xiaomi",color: "black",price: "1100",brand: "xiaomi"},

];
//filter
//filter holo onk gula jinish thake oikhan theke shorto shapekkhe ba condition shapekkhe kisu jinish k khuje notun ekta array er vitor kore return kore
//filter e kono shorto na mille mt [] array dito
const newProducts=products.filter(product => product.price > 1000);
// console.log(newProducts)


//jodi filter e kono id ba kisu bad dite chai tahole
const newProducTs = products.filter(p => p.id !=3);
// console.log(newProducTs)


//foreach return kore na
// products.forEach(product=>{
//     if (product.color==="gold"){
//         console.log(product)
//     }
// })


//find 
//find return kore
//find loop chalaye 1st jeta pabe oi take return kore ..tao object er vitor
//find e kono shorto na mille undefiend dibe
// const product=products.find( p=> p.color==="gold");
// console.log(product)
// const product=products.find( p=> p.id===3);
// console.log(product)

