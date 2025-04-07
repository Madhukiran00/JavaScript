// //Data Types in JS
// //Primitive Data types
// //Trivial Data type
// //Non-Primitive Data type

// //Primitive
// //number
// var a=123
// console.log(a)
// console.log(typeof(a))

// //Sting
// var name="Madhu"
// console.log(name)
// console.log(typeof(name))


// //Boolean
// var s=true
// console.log(s)
// console.log(typeof(s))

// var m=false
// console.log(m)
// console.log(typeof(m))

//Trivial Data type

//null
// var a=null
// console.log(a)
// console.log(typeof(a))

// //undefined
// var b
// console.log(b)
// console.log(typeof(b))


// //Non-Primitive Data type
// //Array
// var num=[1,2,3,4,5,6]
// console.log(num)
// console.log(typeof(num))

// //Object
// var details={
//     name:"Madhu",
//     age:21,
// }
// console.log(details)
// console.log(typeof(details))


// // Arithmetic Operators
// let a = 10, b = 5;
// console.log("Addition:", a + b);   // 15
// console.log("Subtraction:", a - b); // 5
// console.log("Multiplication:", a * b); // 50
// console.log("Division:", a / b);   // 2
// console.log("Modulus:", a % b);   // 0
// console.log("Exponentiation:", a ** b); // 100000

// // Assignment Operators
// let x = 10;
// x += 5; // x = x + 5
// console.log("Updated x:", x); // 15

// // Comparison Operators
// console.log(a == b);   // false (equal check)
// console.log(a === "10"); // false (strict equality)
// console.log(a > b);    // true

// // Logical Operators
// let isTrue = true, isFalse = false;
// console.log("AND:", isTrue && isFalse); // false
// console.log("OR:", isTrue || isFalse);  // true
// console.log("NOT:", !isTrue); // false

// // Ternary Operator
// let result = (a > b) ? "A is greater" : "B is greater";
// console.log(result);  // A is greater

// // Typeof Operator
// console.log(typeof a); // number
// console.log(typeof "Hello"); // string

// // Bitwise Operators
// console.log(5 & 1);  // 1 (AND)
// console.log(5 | 1);  // 5 (OR)
// console.log(5 ^ 1);  // 4 (XOR)
// console.log(5 << 1); // 10 (Left Shift)
// console.log(5 >> 1); // 2 (Right Shift)

// // Using Spread Operator
// let nums = [1, 2, 3];
// let newNums = [...nums, 4, 5];
// console.log("Spread Operator:", newNums); // [1,2,3,4,5]

// var A={name:"madhu",
//     age:20
//     }
// console.log(typeof(A))

// Control Statements
// 1)Conditional Control Statements
// 2)Looping Statements
// 3)Jumping Statemnts

// Conditional Statements
// 1)if

// var a=2
// var b=4
// if (a<b)
// {
//     console.log("B is grater than A")
// }

// //2)if-else

// var c=5
// var d=9
// if (c>d)
// {
//     console.log("A is greater than B")
// }
// else
// {
//     console.log("B is grater than A")
// }

// //3)Switch
// var color="blue"
// switch (color){
//     case "pink":
//         console.log("The color choosed is pink")
//         break;
//     case "black":
//         console.log("The color choosed if black")
//         break;
//     case "blue":
//         console.log("The choosed color is blue")
//         break;
//     default:
//         console.log("Non of the color is matched")

// }
// a=1
// while (a<0)
// {
//     console.log(a)
//     a++
// }
//Looping Control Statements
//1)While
//2)do-while
//3)for
//a)for of
//b)for in 

//1)While
// a=10
// while (a!=0)
// {
//     console.log(a)
//     a=a-1
// }
// ////////////////////////////
// a=1
// do
// {
//     console.log(a)
//     a++
// }
// while (a<=10)
// ////////////////////////////
// //3)for
// for (var a=1;a<=5;a++)
// {
//     console.log(a)
// }
// //3)a)for of
// var a=[9,8,7,6]
// for (var res of a)
// {
//     console.log(res)
// }
// //3)b)for in 
// var b={
//     name:"Madhu",
//     age:21
// }
// for (var res1 in b)
// {
//     console.log(b[res1])
// }

// var a=12
// if (a<0)
// {
//     confirm("The statement is true")
// }
// else
// {
//     confirm("The condition is false")
// }

// var a={
//     name:"madhu",
//     age:21
// }
// for (var res in a)
// {
//     console.log(res+":"+a[res])
// }

// var a=parseFloat(prompt("Enter the  first number"))
// var b=parseFloat(prompt("Enter the  secound number"))
// var res=Math.sqrt(a)
// console.log(Math.sqrt(a))
// console.log(Math.sqrt(b))

// var a=parseFloat(prompt("Enter the no"))
// console.log(typeof(a))
// function add(a,b)
// {
//     return a+b
// }
// var res=add(3,6)
// console.log(res)

// var fun=(a,b)=>a*b
// var res=fun(5,6)
// console.log(res)



// var va=(a,b)=>a*b
// var res=va(6,7)
// console.log(res)
// var a=(b,c)=>b+c
// var res=a(5,7)
// console.log(res)


// (function (a,b)
// {
//     console.log(a*b)
// }
// )
// (5,8)


// var a= new Array(1,2,3,4,5)
// console.log(a)


// var a=[1,2,3,4,5,6]
// a.push(9)
// console.log(a)
// a.unshift(0)
// console.log(a)
// var a=[1,2,3,4,5]
// a[5]=3
// console.log(a)










// //Array Methods 
// var a=[1,2,3,4,5]
// //push()
// a.push(6)
// console.log(a)
// //unshift()
// a.unshift(0)
// console.log(a)
// //splice
// a.splice(2,0,8)
// console.log(a)
// //pop()
// a.pop()
// console.log(a)
// //shift()
// a.shift()
// console.log(a)
// //delete
// delete a[1]
// console.log(a)
// //slice
// a.splice(1,1)
// console.log(a)
// //sort()
// b=[7,6,5,4,7]
// b.sort()
// console.log(b)
// //reverse()
// b.reverse()
// console.log(b)
// //To-String
// s=["A","B","C","D"]
// r=s.toString()
// console.log(r)
// //join
// r=s.join("-")
// console.log(r)
// //slice
// r=b.slice(1,4)
// console.log(r)
// //at
// r=b.at(2)
// console.log(r)

// var a=[1,10,5,6,14]

// var res=a.find(greater)

// console.log(res)

// function greater(value)
// {
//     return value>4
// }

// var ar=["M","A","D","H","U"]
// ar=ar.slice(0,5)
// ar=ar.join("")
// console.log(ar)


// var a=parseInt(prompt("Enter the no1"))
// var b=parseInt(prompt("Enter the no2"))
// console.log(a+b)



//Comparision of two strings

//without constructor
// var str1="madhu"
// var str2="madhu"

// console.log("Without Constructer:",str1==str2)

// //with constructor
// var string1= new String ("madhu")
// var string2= new String ("madhu")

// console.log("With constructer:",string1==string2)















