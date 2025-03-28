var _a;
// Функция для вычисления квадратного корня методом Герона
function calculateSquareRoot() {
    var inputElement = document.getElementById('numberInput');
    var number = parseFloat(inputElement.value); // Получаем введенное значение и преобразуем в число
    var resultElement = document.getElementById('result');
    // Проверка на корректность введенного числа
    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Введите положительное число!';
        return;
    }
    var nach_shislo = number / 2; // Начальное предположение
    var tochnost = 0.000001; // Точность
    // Итерационная формула Герона
    while (Math.abs(nach_shislo * nach_shislo - number) > tochnost) {
        nach_shislo = (nach_shislo + number / nach_shislo) / 2;
    }
    // Выводим результат
    resultElement.textContent = "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C \u0447\u0438\u0441\u043B\u0430 ".concat(number, " \u0440\u0430\u0432\u0435\u043D ").concat(nach_shislo.toFixed(6), ".");
}
// Обработчик события для кнопки
(_a = document.getElementById('calculateButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calculateSquareRoot);
