function throttle(func, wait) {
  let waiting = false;
  let lastArgs;
  return function () {
    if (!waiting) {
      waiting = true;
      func.apply(this, arguments);
      setTimeout(() => {
        waiting = false;
        if (lastArgs) func.apply(this, lastArgs);
      }, wait);
    } else {
      lastArgs = [...arguments];
    }
  };
}


// let currentTime = 0;

// const run = (input) => {
//   currentTime = 0;
//   const calls = [];

//   const func = (arg) => {
//     calls.push(`${arg}@${currentTime}`);
//   };

//   const throttled = throttle(func, 3);
//   input.forEach((call) => {
//     const [arg, time] = call.split("@");
//     setTimeout(() => throttled(arg), time);
//   });
//   return calls;
// };

// // expect(run(["A@0", "B@2", "C@3"])).toEqual(["A@0", "C@3"]);
// console.log(run(["A@0", "B@2", "C@3"]));