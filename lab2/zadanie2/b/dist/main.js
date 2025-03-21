function findPrimes(n) {
    var array = [], limit = Math.sqrt(n), result = [];
    for (var i = 2; i < n; i++) {
        array.push(true);
    }
    for (var i = 2; i <= limit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    for (var i = 2; i < n; i++) {
        if (array[i]) {
            result.push(i);
        }
    }
    return result.join(" ");
}
var n = 30;
console.log(findPrimes(n));
