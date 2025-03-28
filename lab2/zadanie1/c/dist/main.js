function canPlay() {
    var dayOfWeek = document.getElementById("dayOfWeek").value;
    var temperature = document.getElementById("temperature").value;
    var weather = document.getElementById("weather").value;
    var wind = document.getElementById("wind").value;
    var humidity = document.getElementById("humidity").value;
    var result = document.getElementById("result");
    // Проверка, можно ли играть в бадминтон в зависимости от факторов
    if (dayOfWeek !== "sunday" && weather === "clear" && wind === "no" && (temperature === "warm" || temperature === "hot") && humidity === "low") {
        result.textContent = "Да, можно играть в бадминтон! Жаль, что сегодня не воскресенье!(";
    }
    else if (dayOfWeek == "sunday" && weather === "clear" && wind === "no" && (temperature === "warm" || temperature === "hot") && humidity === "low") {
        result.textContent = "Да, можно играть в бадминтон! Воскресенье отлично для этого подходит!)";
    }
    else {
        result.textContent = "Нет, не стоит играть в бадминтон.";
    }
}
