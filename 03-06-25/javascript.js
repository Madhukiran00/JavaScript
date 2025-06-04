// 1)length
// 2)push
// 3)pop
// 4)unshift
// 5)shift
// 6)splice
// 7)delete  ==> not used
// 8)  toString
// 9)sort 
// 10)reverse 
// 11)at 
// 12)slice
// 13)join
// 13)indexOf
// 14)lastIndex
// 15)includes

// 16)find 
// 17)filter 
// 18)map 
// 19)reduce



let arr=[1,2,3,4,5]
console.log(arr);
console.log(`Length: ${arr.length}`)
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)
arr.splice(2,0,2)
console.log(arr)
arr.splice(2,1,)
console.log(arr)
console.log(arr.toString())
// console.log(((arr.toString()).split(",")).join())

let arr1=[4,6,9,2,5,3]
console.log(arr1.sort())
console.log(arr1.reverse())
console.log(arr1.at(3))

let arr2=[4,9,1,8,2,5,3]
console.log(arr2.slice(2))
console.log(arr2.slice(2,5))

let arr3=["4","9","1","8","2","5","3"]
console.log(arr2.join())

arr2=[4,9,1,8,2,5,3,8,4,7]
console.log(arr2.indexOf(8))
console.log(arr2.lastIndexOf(8))
console.log(arr2.includes(8))


var arr4=[2,6,8,6,4,7,5]
var result=arr4.find(fun)
console.log(result)

function fun(value){
    return value>4
}

let res=arr4.filter(fun1)
console.log(res)

function fun1(value){
    return value>4
}


let res1=arr4.map(mul)
console.log(res1)

function mul(val){
    return  val*2

}





