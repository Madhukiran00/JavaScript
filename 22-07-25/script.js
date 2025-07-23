



// class Parent{
//     constructor(name){
//         this.name=name
//     }
//     fun1(){
//         console.log("Parent")
//     }
// }

// class Child extends Parent{
//     constructor(name){
//         super(name)
      
//     }
//     fun2(){
//         console.log("Child")
//     }
// }

// obj=new Child("madhu")

// obj.fun1()






// let canFly={ fly(){console.log("Flying");}};


// let canSwim={ swim(){console.log("Swimming");}};


// class Animal{}

// Object.assign(Animal.prototype,canFly,canSwim);


// let bird=new Animal();

// bird.fly();
// bird.swim();



// let var1={ add(){console.log("sum")}}


// let var2={sum(){console.log("sum")}}

// class Animal{}

// Object.assign(Animal.prototype,var1,var2)


// let obj=new Animal()

// obj.add()

// obj.sum()





let Parent={greet(){console.log("Parent")}};


let child=Object.create(Parent);

child.some=function(){console.log("dgdfggfdh")}


child.greet()
child.some()

