function Binarysearch (num , target){

    let left = 0;
    let rigth = num.length - 1;

    while(left <= rigth){
        let mid = (rigth + left /2)
        if(num[mid]===target){
            return mid;
        }
        if(num[mid] >= num[left] ){
             if(target >= num[left] && target < num[mid]){
                 rigth = mid -1
             }
               
            else{
                left = mid +1 
             }
        }
        else{
            if(target >= num[mid] && target < num[rigth]){
                left = mid +1;
            }    
            else{
                rigth = mid -1
            } 
        }
    }
    return -1;
}

let num1 = [4,5,6,7,0,1,2]
let target1 = 3
console.log(Binarysearch(num1 , target1));


































