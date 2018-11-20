var hand = 0;
setInterval(function() {
    if (hand==0) {
        nav.bgColor = "red";
        hand = 1;
    } else {
        nav.bgColor = "blue";
        hand=0;        
    };
}, 1000);
