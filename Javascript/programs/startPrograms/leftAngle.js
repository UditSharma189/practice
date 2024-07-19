const triangle = (num) => {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

// triangle(5);

// *
// **
// ***
// ****
