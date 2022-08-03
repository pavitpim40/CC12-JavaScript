
// ### FOR
// let arr = ['Apple', 'Orange', 'Pear'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// FOR IN
// let arr = ['Apple', 'Orange', 'Pear'];

// for (let index in arr) {
//   console.log(arr[index]);
// }


// FOR OF 
// let arr = ['Apple', 'Orange', 'Pear'];

// for (let item of arr) {
//   console.log(item);
// }


// FOREACH : Array Method

const arr = ['Cat',"Dog","Rat","Hippo"]
// DECLARATION
function logName(a,b,c) {
    console.log(a,b,c)
}

// function logNameWithConvention(item,index,array) {
//     console.log(item,index,array)
// }

// Expression
// let logNameWithConvention = function(item,index,array) {
//     console.log(item,index,array)
// }

// Arrow
let logNameWithConvention = (item,index,array) => {
     console.log(item,index,array)
 }

function alertName(d,e,f) {
    alert(d)
}

// arr.forEach(logNameWithConvention)
// arr.forEach(alertName)

// ### PASS CALLBACK ON THE FLY
// arr.forEach(function (item,index,arr){
//     console.log(item)
// })

// ### RETURN VALUE
// let afterForEach = arr.forEach(function (item,index,arr){
//     console.log(item)
// })

// console.log(afterForEach)

['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});
  