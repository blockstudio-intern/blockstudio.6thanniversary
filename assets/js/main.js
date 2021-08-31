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


// confetti //
// function createRipple(y, x) {
//   const ripple = `<div class="circle" style="top:${y}px;left:${x}px;"></div>`;
//   console.log(x);
//   const _ripple = $(ripple);
//   $('.ripple').append(_ripple);
//   setTimeout(() => _ripple.remove(), 5000);
// }

// function confetti() {
//   [{
//     bg: '#FFC700',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//   }, {
//     bg: '#BADA45',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//   }, {
//     bg: '#F0983F',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//   }, {
//     bg: '#0F4C81',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//   }, {
//     bg: '#4F9D00',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '😜',
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '😽',
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '🥳',
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '🦦',
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '🌸',
//   }, {
//     bg: 'transparent',
//     position: Math.random() * $('html').width(),
//     height: Math.random() * $('html').height(),
//     speed: Math.floor(Math.random() * 5)+1,
//     internal: '✨',
//   }].map(options => {
//     const c = $(`<div class="confetti" style="background:${options.bg};left:${options.position}px;animation: fall ${options.speed}s cubic-bezier(0.05, 0.46, 1, 1) both;">${options.internal || ''}</div>`);
//     $('body').append(c);
//     setTimeout(() => c.remove(), 5000);
//   });
// }

// $('.celebrate-btn').mousedown(e => {
//   const offset = $(e.target).offset();
//   createRipple(e.pageY - offset.top, e.pageX - offset.left);
//   confetti();
// });

var obj = this;
var timer = null;
//解绑dblclick
jQuery(".celebrate-btn").unbind('dbclick',null);
lastTime = 0;
jQuery(".celebrate-btn").on('click',function(event){
  event.preventDefault();
  var currentTime = new Date().getTime();
  //记录两次相连的点击时间间隔，大于1秒，重新记录点击次数
  count = (currentTime-lastTime) < 1000 ? count + 1 : 1;
  lastTime = new Date().getTime();
  
  if (count === 1) {
    clearTimeout(timer);
    timer=setTimeout(function(){
    console.log('点击一次执行这部分代码');
    function createRipple(y, x) {
    const ripple = `<div class="circle" style="top:${y}px;left:${x}px;"></div>`;
    console.log(x);
    const _ripple = $(ripple);
    $('.ripple').append(_ripple);
    setTimeout(() => _ripple.remove(), 5000);
    }

    function confetti() {
      [{
        bg: '#FFC700',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
      }, {
        bg: '#BADA45',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
      }, {
        bg: '#F0983F',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
      }, {
        bg: '#0F4C81',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
      }, {
        bg: '#4F9D00',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '👻',
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '😽',
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '🥳',
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '🦦',
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '🌸',
      }, {
        bg: 'transparent',
        position: Math.random() * $('html').width(),
        height: Math.random() * $('html').height(),
        speed: Math.floor(Math.random() * 5)+1,
        internal: '✨',
      }].map(options => {
        const c = $(`<div class="confetti" style="background:${options.bg};left:${options.position}px;animation: fall ${options.speed}s cubic-bezier(0.05, 0.46, 1, 1) both;">${options.internal || ''}</div>`);
        $('body').append(c);
        setTimeout(() => c.remove(), 5000);
      });
    }

    $('.celebrate-btn').mousedown(e => {
      const offset = $(e.target).offset();
      createRipple(e.pageY - offset.top, e.pageX - offset.left);
      confetti();
    });
    },250)
  }else {
    //
    clearTimeout(timer);
    }
  if(count>30){
    console.log('点击4次以上执行这部分代码');
    const d = $(`<audio src="https://blockstudio-intern.github.io/Ben_afterparty/sound/loops_8bit.mp3" controls="" id="audioPlayer" style="display: none" autoplay="true"></audio>`);
    $('.nav').addClass('active')
    $('.nav').append(d);
    setTimeout(() => d.remove(), 4000);
    setTimeout(function() {
    $('.nav').removeClass('active');
    }, 4000);

    }
});




