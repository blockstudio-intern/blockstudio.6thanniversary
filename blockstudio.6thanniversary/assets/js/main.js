/* by Roizi */


/* Coordinate 
document.getElementById("coords").addEventListener('mousemove', function(event) {
    var coordnum_x = (event.clientX*7 + 35600)/1000 ;
    var coordnum_y = (event.clientY*5 + 24500)/1000 ;
    document.getElementById("coord-num").innerHTML = coordnum_x  + 'ºE'  + '<br>' + coordnum_y + 'ºN'  ;
    document.getElementById("coord-num").style.left =  20 + event.clientX + 'px';
    document.getElementById("coord-num").style.top = 20 + event.clientY + 'px'; 
}); */



/* Show Time */
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
        edgeResistance: 0.8,
        type: "x,y",
        throwProps: true,
        autoScroll: true,
    });
}
update();