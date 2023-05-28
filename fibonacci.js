//Pass in number, expect array
//Base cases are incremented by 1 (1,2 instead of 0, 1) because
//we only want the FIRST nth numbers in the sequence. So we account for 0th.
function fibonacci(num) {
    if ( num === 1 ) {
        return [0];
    }
    if ( num === 2 ) {
        return [0, 1];
    } else {
        let f1 = fibonacci(num-1);
        let f1_size = f1.length;
        f1.push(f1[f1_size-1] + f1[f1_size-2]);
        return f1;
    }
}

console.log(fibonacci(8));