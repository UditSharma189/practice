// counting(["a", "b", "a", "c", "V", "B", "d"]);

const counting = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]] += 1;
  }
  return obj;
};

// const count = counting(["a", "b","b", "a", "c", "V", "B", "d"]);
// console.log(count)
