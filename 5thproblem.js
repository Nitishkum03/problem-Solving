//console.log("Start");

//setTimeout(() => {
//    console.log("Inside setTimeout");
//}, 0);

//console.log("End");
function Swapelement(arr){
    let len= arr.length-1;
    for(let i = 0; i<arr.length; i+=2){ 
        if(i !=len){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    console.log(arr);
}
Swapelement([1,2,3,4,5,6]);