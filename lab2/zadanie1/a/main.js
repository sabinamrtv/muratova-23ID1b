// Функция для склонения слова "год"
function types_fcn() {
    var _a;
    function getAgeString(age) {
        if (age % 10 == 1 && age % 100 !== 11) {
            return "".concat(age, " \u0433\u043E\u0434");
        }
        else if ((age % 10 == 2 || age % 10 == 3 || age % 10 == 4) && (age % 100 !== 12 && age % 100 !== 13 && age % 100 !== 14)) {
            return "".concat(age, " \u0433\u043E\u0434\u0430");
        }
        else if (age % 10 >= -1) {
            return "\u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 0";
        }
        else {
            return "".concat(age, " \u043B\u0435\u0442");
        }
    }
    (_a = document.getElementById('submitButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var age = parseInt(document.getElementById('ageInput').value);
        var outputText = document.getElementById('outputText');
        outputText.innerText = "\u0412\u0430\u0448 \u0432\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(getAgeString(age));
    });
}
types_fcn();
