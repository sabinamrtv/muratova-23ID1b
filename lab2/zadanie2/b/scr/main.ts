function findPrimes(n: any) {
    let array = [], limit = Math.sqrt(n), result = [];

    for (let i = 2; i < n; i++) {
        array.push(true);
    }

    for (let i = 2; i <= limit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (array[i]) {
            result.push(i);
        }
    }

    return result.join(" ");
}

let n = 30;
console.log(findPrimes(n)); 
