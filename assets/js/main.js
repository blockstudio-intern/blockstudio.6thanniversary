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

//Draggable//
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

//mini-map//
$(function () {
    // raw-image 1280 * 1677
    const RAW_IMAGE_WIDTH = 2700;
    const RAW_IMAGE_HEIGHT = 1800;
    // mini-map 128 * 167.7
    const MINIMAP_WIDTH = 20;
    const IMAGE_RATE = RAW_IMAGE_HEIGHT / RAW_IMAGE_WIDTH;

    const painting = document.getElementById("rawImage");
    const view = document.getElementById("imageView");
    const viewWidth = view.getBoundingClientRect().width;
    view.style.height = (viewWidth * IMAGE_RATE) + "px";
    const viewRect = view.getBoundingClientRect();
    const minimap = document.getElementById("minimap"); // 1/10
    const minimapRect = minimap.getBoundingClientRect();
    const pointer = document.getElementById("minimap-pointer");
    const pointerWidth = viewWidth / RAW_IMAGE_WIDTH * MINIMAP_WIDTH;
    pointer.style.width = pointerWidth + "px";
    pointer.style.height = (pointerWidth * IMAGE_RATE) + "px";
    const pointerRect = pointer.getBoundingClientRect();
    const scale = [
        (minimapRect.width - pointerRect.width) / (RAW_IMAGE_WIDTH - viewRect.width),
        (minimapRect.height - pointerRect.height) / (RAW_IMAGE_HEIGHT - viewRect.height)
    ];

    // 1. Initialize eg.Axes
    const axes = new eg.Axes({
        rawX: {
            range: [0, RAW_IMAGE_WIDTH - viewRect.width],
            bounce: 100
        },
        rawY: {
            range: [0, RAW_IMAGE_HEIGHT - viewRect.height],
            bounce: 100
        }
    }, {
        deceleration: 0.01
    });

    // 2. attach event handler
    axes.on("change", ({ pos }) => {
        painting.style[eg.Axes.TRANSFORM] = `translate3d(${-pos.rawX}px, ${-pos.rawY}px, 0)`;
        pointer.style[eg.Axes.TRANSFORM]
            = `translate3d(${pos.rawX * scale[0]}px, ${pos.rawY * scale[1]}px, 0)`;
    });

    // 3. Initialize a inputType and connect it
    axes.connect("rawX rawY", new eg.Axes.PanInput(view, {
        scale: [-1, -1]
    }));
});



