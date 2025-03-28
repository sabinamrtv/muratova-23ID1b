function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
function sortArray() {
    var inputElement = document.getElementById("inputArray");
    if (inputElement && inputElement.value) {
        var userInput = inputElement.value.trim();
        // Преобразуем введенные числа в массив
        var arr = userInput.split(",").map(function (num) { return parseInt(num.trim()); });
        // Проверка на наличие некорректных данных
        if (arr.some(isNaN)) {
            document.getElementById("result").textContent = "Ошибка: введите корректные числа, разделенные запятыми.";
            return;
        }
        // Сортируем массив с помощью MergeSort
        var sortedArray = mergeSort(arr);
        // Выводим результат
        document.getElementById("result").textContent = "\u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432: ".concat(sortedArray.join(", "));
    }
    else {
        document.getElementById("result").textContent = "Ошибка: не удалось получить данные.";
    }
}
