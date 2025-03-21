var _a;
// Функция для проверки високосного года
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
}
// Функция для нахождения количества дней в месяце
function getDaysInMonth(month, year) {
    var daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
}
(_a = document.getElementById('daysButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var month = parseInt(document.getElementById('monthInput').value);
    var year = parseInt(document.getElementById('yearInput').value);
    var daysOutput = document.getElementById('daysOutput');
    if (month > 1 && month <= 12) {
        var days = getDaysInMonth(month, year);
        daysOutput.innerText = "\u0412 ".concat(month, "-\u043C \u043C\u0435\u0441\u044F\u0446\u0435 ").concat(year, " \u0433\u043E\u0434\u0430 ").concat(days, " \u0434\u043D\u0435\u0439.");
    }
    else if (month % 10 == 1 && month % 100 !== 11) {
        var days = getDaysInMonth(month, year);
        daysOutput.innerText = "\u0412 ".concat(month, "-\u043C \u043C\u0435\u0441\u044F\u0446\u0435 ").concat(year, " \u0433\u043E\u0434\u0430 ").concat(days, " \u0434\u0435\u043D\u044C.");
    }
    else {
        daysOutput.innerText = 'Введите правильные значения для месяца и года!';
    }
});
