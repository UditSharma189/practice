const anagram = (str1, str2) => {
    
  if (str1.length !== str2.length) {return false;}

  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

//   console.log(sortedStr1, sortedStr2);

  return sortedStr1 === sortedStr2;
};

// const ana = anagram("listen", "silent");
// const ana = anagram("anagram", "nagaram");

// console.log(ana);
