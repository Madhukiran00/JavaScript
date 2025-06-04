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

arr2=arr2.split(",")


