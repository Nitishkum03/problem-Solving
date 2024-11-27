//let arr = [1,2,3,4,5,6,7];
//let revers = [];
//let A = 0;
//for(let i = arr.length-1;i>=0;i-- ){
//    revers[A++]=arr[i];
//}
//console.log(revers)
console.log("This is normal array");
console.log([1,2,3,4,5]);
function reverseArray(arr) {
    let revers = [];
    let A = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        revers[A++] = arr[i];
}
    console.log(revers);
}
console.log("this is reversed array")
reverseArray([1,2,3,4,5]);
