function flat(arr, depth = 1) {
  // your imeplementation here
  let flattenArr = [];
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i]) && depth > 0){
        flattenArr = flattenArr.concat(flat(arr[i], depth - 1));
    }else{
        flattenArr.push(arr[i])
    }
  }
  return flattenArr;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
