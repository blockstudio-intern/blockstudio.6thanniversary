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