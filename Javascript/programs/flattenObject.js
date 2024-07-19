const flattenObj = (obj) => {
    let result = [];
    for( i in obj ){
        if( typeof obj[i] === "object" && !Array.isArray(obj[i])){
            // const temp = flattenObj(obj[i]);
            console.log(temp)
            for(j in temp){
                result[i + "" + j] = temp[j];
            }
        }else{
            result[i] = obj[i];
        }
    }
    return result;
}

// console.log(flattenObj({
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//   },
// }))