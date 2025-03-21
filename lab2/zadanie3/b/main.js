function findMedian() {
    var inputElement = document.getElementById("inputNumbers");
    var inputValue = inputElement.value;
    // Преобразуем введенную строку в массив чисел
    var numbers = inputValue.split(",").map(function (num) { return parseFloat(num.trim()); });
    // Проверяем, что введены корректные числа
    if (numbers.some(isNaN)) {
        document.getElementById("result").textContent = "Ошибка: введите только числа, разделенные запятыми.";
        return;
    }
    // Находим медиану
    var median = calculateMedian(numbers);
    // Выводим результат
    document.getElementById("result").textContent = "Медиана: " + median;
}
function calculateMedian(arr) {
    // Сортируем массив
    arr.sort(function (a, b) { return a - b; });
    var middle = Math.floor(arr.length / 2);
    // Если количество элементов нечетное, возвращаем среднее значение
    if (arr.length % 2 === 1) {
        return arr[middle];
    }
    // Если количество элементов четное, возвращаем среднее значение двух центральных чисел
    return (arr[middle - 1] + arr[middle]) / 2;
}
