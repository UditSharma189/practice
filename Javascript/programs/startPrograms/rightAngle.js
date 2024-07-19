const right = (num) => {
    let string = "";
    for(let i=1; i<=num; i++){
        for(let j=0; j< num - i; j++){
            string += "-";
        }
        for(let k =0; k<i; k++){
            string += "*";
        }
        string += "\n"
    }
    console.log(string);
}

// right(5)