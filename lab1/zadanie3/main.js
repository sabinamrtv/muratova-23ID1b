//Задание 3. Программа, которая высчитывает объем додекаэдра через его ребро
function types_fcn() {
    //Присваиваем переменным значения
    let inputElement = document.getElementById('userInput');
    let buttonElement = document.getElementById('submitButton');
    let outputElement = document.getElementById('outputText');
    //Добавляем кнопку и присваем действие, на которое она будет реагировать(клик)
    buttonElement.addEventListener('click', function () {
        //Читаем введенную длину ребра из input
        let a = parseInt(inputElement.value);
        let b = 15, c = 15.65, d = 4;
        let e = (((b + c) / d) * (a * a * a));
        //Выводим оъем додекаэдра в теге p
        outputElement.innerText = "\u041E\u0431\u044A\u0435\u043C \u0434\u043E\u0434\u044D\u043A\u0442\u0430\u044D\u0434\u0440\u0430: ".concat(e);
    });
}
types_fcn();
