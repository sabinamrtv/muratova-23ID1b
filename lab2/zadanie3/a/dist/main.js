function findPrimes() {
    var inputElement = document.getElementById("inputN");
    // Проверяем, что элемент найден и его значение валидно
    if (inputElement && inputElement.value) {
        var N = parseInt(inputElement.value);
        // Проверка на правильность ввода
        if (isNaN(N) || N < 2) {
            document.getElementById("result").textContent = "Ошибка: введите число больше или равно 2.";
            return;
        }
        // Создаем массив чисел от 2 до N
        var primes = [];
        for (var i = 2; i <= N; i++) {
            primes.push(i);
        }
        // Применяем решето Эратосфена
        for (var i = 2; i <= Math.sqrt(N); i++) {
            if (primes[i]) {
                for (var j = i * i; j <= N; j += i) {
                    primes[j] = 0; // помечаем составные числа
                }
            }
        }
        // Фильтруем простые числа
        primes = primes.filter(function (num) { return num !== 0; });
        // Выводим результат
        document.getElementById("result").textContent = "\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430: ".concat(primes.join(", "));
    }
    else {
        document.getElementById("result").textContent = "Ошибка: не удалось получить значение.";
    }
}
