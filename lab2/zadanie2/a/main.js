function findSquareRoot() {
    var n = Number(document.getElementById("number").value);
    var result = document.getElementById("result");
    // Проверяем, что число не отрицательное
    if (n < 0) {
        result.textContent = "Введите положительное число.";
        return;
    }
    var x = n / 2; // Начальное значение
    var error = 0.000001;
    while (Math.abs(x * x - n) > error) {
        x = (x + n / x) / 2;
    }
    result.textContent = "Квадратный корень числа " + n + " равен " + x + ".";
}
