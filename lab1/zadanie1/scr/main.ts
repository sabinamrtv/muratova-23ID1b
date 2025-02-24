//Задание 1. a) Создаем переменную и окно для ввода, использовать prompt, alert
var user = window.prompt("Введите ваше имя");// Тип данных: string или null
//Выводим приветствие + имя из прошлого шага
alert( `Привет, ${user}!` );

////Задание 1. b) Прочитать из input и вывести в текст тега p, используя document.getElementById
function types_fcn() {
 const inputElement = document.getElementById('userInput') as HTMLInputElement;
 const buttonElement = document.getElementById('submitButton') as HTMLButtonElement;
 const outputElement = document.getElementById('outputText') as HTMLParagraphElement;

 //Добавляем кнопку и присваем действие, на которое она будет реагировать(клик)
 buttonElement.addEventListener('click', () => {
 //Берем имя пользователя из input
 const userName = inputElement.value;

 //Выводим приветствие в теге p
 outputElement.innerText = `Привет, ${userName}!`;
 });
 }
 types_fcn();