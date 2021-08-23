function showTime() {
    var date = new Date();
    var y = date.getFullYear();
    var mon = 1 + date.getMonth();
    var d = date.getDate();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var anniversary = new Date(2015, 05, 17);
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = y + "/" + mon + "/" + d + "  " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("TimeDisplay").innerText = time;
    document.getElementById("TimeDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

var $container = $("#container");

function update() {
    Draggable.create(".map", {
        bounds: $container,
        edgeResistance: 0.65,
        type: "x,y",
        throwProps: true,
        autoScroll: true,
    });
}

update();


