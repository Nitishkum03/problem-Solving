function pushzerostoend(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] !== 0)
        arr[count++] = arr[i];
    }
    while (count < arr.length)
      arr[count++] = 0;
    }
    const arr = [1,2,0,4,3,0,5,0];
pushzerostoend(arr);
console.log(arr.join(", "));

