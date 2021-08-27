//Kate

//showTime//
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

//mini-map//


//Draggable//
(() => {
    var $container = $("#container");
    const map = document.querySelector('.map-wrapper')
    const minmap = document.getElementById('minimap')
    const pointer = document.getElementById('minimap-pointer')
    const { clientWidth: mapWidth, clientHeight: mapHeight} = map
    const { clientWidth: minmapWidth, clientHeight: minmapHeight } = minmap
    const drag = () => {
        const style = window.getComputedStyle(map)
        const matrix = style.transform || style.webkitTransform || style.mozTransform
        const matrixType = matrix.includes('3d') ? '3d' : '2d'
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
        if (matrixType === '2d') {
            const x = matrixValues[4]
            const y = matrixValues[5]
            const scaleX = minmapWidth / mapWidth
            const scaleY = minmapHeight / mapHeight
            const pointX = -(x - innerWidth / 2) * scaleX
            const pointY = -(y - innerHeight / 2) * scaleY
            pointer.style.transform = `translate3d(${pointX}px, ${pointY}px, 0)`
        }
    }
    function update() {
        Draggable.create(".map-wrapper", {
            bounds: $container,
            edgeResistance: 0.8,
            inertia: true,
            type: "x,y",
            allowEventDefault: true,
            throwProps: true,
            autoScroll: true,
            onDrag: drag
        });
    
    }
    drag()
    update();
})()




    // // 1. Initialize eg.Axes
    // const axes = new eg.Axes({
    //     rawX: {
    //         range: [0, RAW_IMAGE_WIDTH - viewRect.width],
    //         bounce: 10
    //     },
    //     rawY: {
    //         range: [0, RAW_IMAGE_HEIGHT - viewRect.height],
    //         bounce: 10
    //     }
    // }, {
    //     deceleration: 0.01
    // });

    // // 2. attach event handler
    // axes.on("change", ({ pos }) => {
    //     painting.style[eg.Axes.TRANSFORM] = `translate3d(${-pos.rawX}px, ${-pos.rawY}px, 0)`;
    //     pointer.style[eg.Axes.TRANSFORM]
    //         = `translate3d(${pos.rawX * scale[0]}px, ${pos.rawY * scale[1]}px, 0)`;
    // });

    // // 3. Initialize a inputType and connect it
    // axes.connect("rawX rawY", new eg.Axes.PanInput(view, {
    //     scale: [-1, -1]
    // }));





