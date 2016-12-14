var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var radius = Math.min(width, height) / 8;
var spawnarea_width = width - 2*radius;
var spawnarea_height = height - 2*radius;

for(var i = 1; i <= 3; i++){
	var circleId = "c" + i;
	var circle = document.getElementById(circleId);

	circle.style.width = radius * 2;
	circle.style.height = radius * 2;
	circle.style.left = (Math.random() * spawnarea_width);
	circle.style.top = (Math.random() * spawnarea_height);

	circle.onclick = function(){
		this.style.display= "none";
	}
}