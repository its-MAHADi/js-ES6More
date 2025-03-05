const person = {
    name:"mahadi",
    age:30,
    friends:["korim","rohim"],
    details:{
        job:"yes",
        inMarried:true,
        status:"not found",
    father:{
        name:"shahabuddin",
    }
    }
}
// console.log(person.friends[0])    //output : korim

// console.log(person.details.job)     //yes

// console.log(person.details.father.name)  //output:shahabuddin

//console.log(person.details.mother?.name)    //output:undefined  false hoile (? use korbo)

var user = {name:"joe"}

var zip = user?.address?.zip
//console.log(zip)    //output: undefiend

const Person ={
    name:"xyz",
    age:25,
    country:"bangladesh",
    details:{
        job:true,
        isMarried:false,
    }
}

//console.log(Person.description?.isEating);   //output: undefiend


//jodi number 1 2 3 ba true/false ba - thake tahole ei vabe hobe...
const perSon = {
    name:"mahadi",
    1:"100",
    true:"abcdef",
    age:30,
    friends:["korim","rohim"],
    details:{
        job:"yes",
        inMarried:true,
        status:"not found",
    father:{
        name:"shahabuddin",
    }
    }
}

//console.log(perSon.1)  //output:error
//console.log(perSon[1])   //output:100
//console.log(perSon[true])  //output:abcdef

const people ={
    neil:{
        fristName:"neil"
    },
    bob:{
        fristName:"bob",
    },
    stan:{
        fristName:"stan"
    }
}
console.log(people.neil.fristName)  //output:neil
console.log(people["neil"]["fristName"])  //output:neil