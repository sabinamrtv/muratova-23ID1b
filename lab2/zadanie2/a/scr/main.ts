function findSquareRoot() {
    const n = Number((document.getElementById("number") as HTMLInputElement).value);
    const result = document.getElementById("result") as HTMLParagraphElement;

    // Проверяем, что число не отрицательное
    if (n < 0) {
        result.textContent = "Введите положительное число.";
        return;
    }

    let x = n / 2; // Начальное значение
    const error = 0.000001;
    while (Math.abs(x * x - n) > error) {
        x = (x + n / x) / 2; 
    }

    result.textContent = "Квадратный корень числа " + n + " равен " + x + ".";
}
