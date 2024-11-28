function twoSum(arr,target){
    for(let i = 0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
}
let arr = [3,3,2,11], target = 13;
console.log(twoSum(arr,target));