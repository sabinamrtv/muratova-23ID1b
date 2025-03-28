var _a;
// Функция для инициализации массива с флагами простоты чисел
function initializeArray(n) {
    var primes = new Array(n + 1).fill(true); // Все числа считаем простыми
    primes[0] = primes[1] = false; // 0 и 1 не простые числа
    return primes;
}
// Функция для реализации алгоритма Эратосфена
function sieveOfEratosthenes(n) {
    var primes = initializeArray(n);
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) { // Если i простое
            for (var j = i * i; j <= n; j += i) {
                primes[j] = false; // Отметить кратные числа как составные
            }
        }
    }
    return primes;
}
// Функция для получения списка простых чисел
function getPrimes(primes, n) {
    var result = [];
    for (var i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i); // Добавляем простые числа в результат
        }
    }
    return result;
}
// Функция для отображения результатов на странице
function displayPrimes(n) {
    var primes = sieveOfEratosthenes(n); // Находим простые числа
    var primesList = getPrimes(primes, n); // Собираем список простых чисел
    var output = document.getElementById('output');
    if (primesList.length > 0) {
        output.innerText = "\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 2 \u0434\u043E ".concat(n, ": ").concat(primesList.join(", "));
    }
    else {
        output.innerText = 'Нет простых чисел для этого диапазона.';
    }
}
// Обработчик нажатия кнопки
(_a = document.getElementById('findButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var n = parseInt(document.getElementById('numberInput').value);
    var output = document.getElementById('output');
    if (!isNaN(n) && n >= 2) {
        displayPrimes(n); // Выводим простые числа
    }
    else {
        output.innerText = 'Введите правильное число больше или равно 2.';
    }
});
