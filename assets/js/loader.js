$(document).ready(function() {
    $(window).on("load", function() {
        $("#main-loader").fadeOut(7000);
    });
});

/* Press word */
var container, material;
var deep = 1, fluid = 0.015;
var uniforms = {
    speed: 0,
    volatility: 0
};

function init() {
    container = document.getElementById("main-loader");
    material = new Blotter.LiquidDistortMaterial();
    //
    var text = new Blotter.Text("Block Studio", {
        weight: 800,
        size: 80,
        fill: 'black',
        paddingLeft: 80,
        paddingRight: 80,
        paddingBottom: 80,
        paddingTop: 80
    });
    /*
     * https://blotter.js.org
     */
    var blotter = new Blotter(material, {
        texts: text
    });
    var canvas = blotter.forText(text).domElement;
    container.appendChild(canvas);
    /*
     * https://pressurejs.com
     */
    Pressure.set(container, {
        change: function(force, event) {
            deep = force;
            fluid = 0.015;
        },
        end: function() {
            fluid = 0.15;
            deep = 0;
        }
    });
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    uniforms.volatility += ((deep * 0.5) - uniforms.volatility) * fluid;
    uniforms.speed += ((deep * 0.5) - uniforms.speed) * fluid;
    //
    material.uniforms.uVolatility.value = uniforms.volatility;
    material.uniforms.uSpeed.value = uniforms.speed;
}

init();
animate();

/* coordination */
jQuery(document).ready(function ($) {
    var mouseX = window.innerWidth / 2,
        mouseY = window.innerHeight / 2;

    var Xbar = {
        el: $('#Xbar'),
        x: window.innerWidth ,
        y: window.innerHeight ,

        update: function () {
            l = this.x; 
            t = this.y; 
           
            this.el.css({
                'transform':
                    'translate3d(' + l + 'px,' + t + 'px, 0)'
            });
        }
    }
    var Ybar = {
        el: $('#Ybar'),
        x: window.innerWidth ,
        y: window.innerHeight ,

        update: function () {
            l = this.x; 
            t = this.y; 
           
            this.el.css({
                'transform':
                    'translate3d(' + l + 'px,' + t + 'px, 0)'
            });
        }
    }

    var cursor = {
        el: $('#a-cursor'),
        x: window.innerWidth ,
        y: window.innerHeight ,
        w:30, 
        h:30, 

        update: function () {
            l = this.x-this.w/2; 
            t = this.y-this.h/2; 
            
            this.el.css({
                'transform':
                    'translate3d(' + l + 'px,' + t + 'px, 0)'
            });
        }
    }

    var cursor_num = {
        el: $('#coord-num'),
        x: window.innerWidth ,
        y: window.innerHeight ,
        w:40, 
        h:40, 

        update: function () {
            l = this.x + this.w/2; 
            t = this.y + this.h/2; 

            this.el.css({
                'transform':
                    'translate3d(' + l + 'px,' + t + 'px, 0)'
            });
        }
    }
    
    $(window).mousemove(function (e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
        var coordnum_x = (e.clientX*7 + 35600)/1000 ;
        var coordnum_y = (e.clientY*5 + 24500)/1000 ;
        $("#coord-num").html(function() {
            return coordnum_x  + 'ºE'  + '<br>' + coordnum_y + 'ºN';
                });
	})

    setInterval (move,1000/60)
    var x = window.innerWidth ;
    var y = window.innerHeight ;

    



    function move(){

        //circle.x = lerp (circle.x, mouseX, 1);
        //circle.y = lerp (circle.y, mouseY, 1);

        Xbar.x = mouseX-x/2;
        Xbar.y = 0;
        Xbar.update() ;

        Ybar.x =0;
        Ybar.y = mouseY-y/2;
        Ybar.update() ;

        cursor.x = mouseX;
        cursor.y = mouseY;
        cursor.update() ;

        cursor_num.x = mouseX;
        cursor_num.y = mouseY;
        cursor_num.update() ;
    }

    function lerp (start, end, amt){
    return (1-amt)*start+amt*end
    }
});

$(document).ready(function() {
    $('coords').on('mousedown', function(e) {
        e.preventDefault();
        return false;
    });
  });