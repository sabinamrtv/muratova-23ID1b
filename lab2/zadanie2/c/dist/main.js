function drawPyramid() {
    var heightInput = document.getElementById("height");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var h = Number(heightInput.value);
    if (h < 1) {
        alert("Введите число");
        return;
    }
    ctx.fillStyle = "black";
    var x = canvas.width / 2;
    var y = 30;
    var sx = 20;
    var sy = 25;
    for (var i = 0; i < h; i++) {
        var yy = y + i * sy;
        var n = i + 1;
        var off = (n - 1) * sx / 2;
        for (var j = 0; j < n; j++) {
            var xx = x - off + j * sx;
            ctx.beginPath();
            ctx.arc(xx, yy, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
