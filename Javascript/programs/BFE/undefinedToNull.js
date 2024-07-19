// function undefinedToNull(arg) {
//   // your code here+
//   let obj = {};
//   for (i in arg) {
//     // console.log(typeof arg[i] === "object");
//     // if(typeof arg[i] === "object"){
//     //     undefinedToNull(arg[i]);
//     // }
//     if (arg[i] === undefined) {
//       obj[i] = null;
//     }else{
//         obj[i] = arg[i];
//     }
//     console.log(Array.isArray(arg[i]), arg[i]);
//     if(Array.isArray(arg[i])){
//       const temp = arg[i];
//       for ( j in temp){
//         if( temp[j] === undefined) {
//             temp[j] = null;
//         }
//       }
//       obj[i] = arg[i];
//     }
//   }
//   return obj;
// }

function undefinedToNull(arg) {
  // your code here+
  if (arg === undefined) return null;

  else if (Array.isArray(arg)) {
    return arg.map(undefinedToNull);
  }else  if( typeof arg === "object"){
    return Object.keys(arg).reduce((acc, currentkey) => ({
        ...acc,
        [currentkey] : undefinedToNull(arg[currentkey])
    }), {})
  }
  return arg;
}

console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }))
// console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));

// console.log(
//   undefinedToNull({
//     a: undefined,
//     b: { c: { d: undefined, e: ["BFE.dev", undefined] } },
//   })
// );
