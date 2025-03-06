class product{
    constructor(name,price,brand,malik){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.malik = malik;
    }

    details() {
        // console.log("ami datails", this.name,this.brand,this.price,this.malik) 
        // console.log(`ami ${this.name} PRODUCT er details`)
    }
}

const iphone = new product("iphone","1234","apple","jobs");
iphone.details()

const xiaomi = new product("redmi",1000, "xiaomi","jani na");
// console.log(xiaomi)
xiaomi.details()