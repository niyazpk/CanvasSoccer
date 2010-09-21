const INFINITY = 99999; 	// Put a large number in here.

function ball(){
    var ball = new Object();
    ball.x = 0;
    ball.y = 0;
    return ball;
}

function player(){
    var player = new Object();
    player.x = Math.round(300 * Math.random());
    player.y = 300 * Math.round(Math.random());
    player.updatePosition = function(){
	var x_diff = this.x - ball.x;
	var y_diff = this.y - ball.y;
	this.x = this.x - 1 * (x_diff/Math.abs(x_diff?x_diff:1));
	this.y = this.y - 1 * (y_diff/Math.abs(y_diff?y_diff:1));
    }
    player.move = function(){}
    return player;
}


var ball = ball();
var player = player();

$(document).ready(function(){

    $('#minimax').click(function(){
	ball.x = 200;
	ball.y = 200;

	player.x = 0;
	player.y = 0;
    });
	
    $('#alphabeta').click(function(){
	resetStatus(node, DEPTH, 2);
	var alpha = -INFINITY;
	var beta = INFINITY;
	alphabeta(node, DEPTH, alpha, beta);
    });
	
    $('#reset').click(function(){
	resetValues(node, DEPTH);
	resetStatus(node, DEPTH, 0);
    });
    
});