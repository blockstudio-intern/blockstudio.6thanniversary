/* by Roizi */

/* Coordinate */
document.getElementById("coords").addEventListener('mousemove', function(event) {
    var coordnum_x = (event.clientX*7 + 35600)/1000 ;
    var coordnum_y = (event.clientY*5 + 24500)/1000 ;
    var coordimg_x = -15 + (event.clientX);
    var coordimg_y = -15 + (event.clientY);
    document.getElementById("Xbar").style.left = event.clientX + 'px';
    document.getElementById("Ybar").style.top = event.clientY + 'px'; 
    document.getElementById("coord-num").innerHTML = coordnum_x  + 'ºE'  + '<br>' + coordnum_y + 'ºN'  ;
    document.getElementById("coord-num").style.left =  20 + event.clientX + 'px';
    document.getElementById("coord-num").style.top = 20 + event.clientY + 'px'; 
    document.getElementById("a-cursor").style.left = coordimg_x + 'px';
    document.getElementById("a-cursor").style.top = coordimg_y + 'px'; 
});