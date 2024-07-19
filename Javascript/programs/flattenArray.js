const flatten = (arr) => {
    let flat_arr = [];
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i]))
            flat_arr = flat_arr.concat(flatten(arr[i]));
        else
            flat_arr.push(arr[i]);
    }
    return flat_arr;
}

// const arr = [1, [[3], 4], [[[5]]], [[7]]];
// console.log("Flattened Array: ", flatten(arr));