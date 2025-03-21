// Функция для склонения слова "год"
function types_fcn() {
function getAgeString(age: number): string {
    if (age % 10 == 1 && age % 100 !== 11) {
        return `${age} год`;
    } else if ((age % 10 == 2 || age % 10 == 3 || age % 10 == 4) && (age % 100 !== 12 && age % 100 !== 13 && age % 100 !== 14)) {
        return `${age} года`;
    } else if (age % 10 >= -1) {
        return `возраст не может быть меньше 0`;
    } else {
        return `${age} лет`;
    } 
}

 document.getElementById('submitButton')?.addEventListener('click', () => {
    const age = parseInt((<HTMLInputElement>document.getElementById('ageInput')).value);
    const outputText = document.getElementById('outputText');
        outputText!.innerText = `Ваш возраст: ${getAgeString(age)}`;
});
}
types_fcn();