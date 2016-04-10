window.onload = function() {
    Crafty.init(500, 600);

    // player ball
    Crafty.c('ball', {
    	init: function(){
    		this.requires("2D, Canvas, resball, Color, Multiway")
    		.attr({
    			x: 0,
    			y: 0,
    			w: 100,
    			h: 100
    		})
    		.multiway(500, {
    			UP_ARROW: -90, 
	            DOWN_ARROW: 90, 
	            RIGHT_ARROW: 0, 
	            LEFT_ARROW: 180
    		})
    		.bind('EnterFrame', function(){
    			this.y += 3;
    		})
    	}
    });

    var ball = Crafty.e("ball");
    ball.attr({
    	x: 100,
    	y: 100,
    	w: 2,
    	h: 100
    }).color("red")

};