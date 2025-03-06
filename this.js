// const peRson = {
//     name : "mahadi",
//     action: function () {
//         console.log(this.name)
//     }
// }

// peRson.action();


class persOn{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    sleep() {
        console.log(`${this.name} sleep at 10pm`)
    }
}

const solimuddin = new persOn("solim",12);
// console.log(solimuddin)

solimuddin.sleep();

const kolim = new persOn("kolim", 12);
kolim.sleep();