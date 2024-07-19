function curry (fn) {
    return function curried(...args) { 
        const expectedArgs = fn.length;
        const isArgEnough = args.length >= expectedArgs && args.slice(0, expectedArgs).every(arg => arg !== curry.placeholder);
        if(isArgEnough){
            return fn.apply(this, args);
        }else{
            return function (...newArgs){  
                const finalArgs = [];
                let i= 0;
                let j = 0;
                while(i < args.length && j < newArgs.length){
                  if (args[i] === curry.placeholder) {
                    finalArgs.push(newArgs[j]);
                    i += 1;
                    j += 1;
                  } else {
                    finalArgs.push(args[i]);
                    i += 1;
                  }
                }
                while(i < args.length && finalArgs.length < expectedArgs) {
                    finalArgs.push(args[i]);
                    i+=1;
                }

                while( j < newArgs.length && finalArgs.length < expectedArgs) {
                    finalArgs.push(newArgs[j]);
                    j+=1;
                }

                return curried(...finalArgs);
            }
        }   
    }
}


curry.placeholder = Symbol();
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;


// console.log(curriedJoin(1, 2)(3));
// curriedJoin(1, 2, 3) // '1_2_3'

// console.log(curriedJoin("_", 2)(1, 3)) // '1_2_3'

console.log(curriedJoin(_, _, _)(1)(_, 3)(2) )// '1_2_3'