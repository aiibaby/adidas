var b = document.getElementById("main")
var c = document.getElementById("intext")
document.getElementById("bg1").addEventListener("click", function(){
	b.style.display = "block";
	c.innerHTML = "Head Gear";
});
document.getElementById("bg2").addEventListener("click", function(){
	b.style.display = "block";
	c.innerHTML = "Body Gear";
	document.getElementById("pic1").src = 'imgs/gears/b1.png';
	document.getElementById("pic2").src = 'imgs/gears/b2.png';
	document.getElementById("pic3").src = 'imgs/gears/b3.png';
});
document.getElementById("bg3").addEventListener("click", function(){
	b.style.display = "block";
	c.innerHTML = "Leg Gear";
	document.getElementById("pic1").src = 'imgs/gears/l1.png';
	document.getElementById("pic2").src = 'imgs/gears/l2.png';
	document.getElementById("pic3").src = 'imgs/gears/l3.png';
});
document.getElementById("bg4").addEventListener("click", function(){
	b.style.display = "block";
	c.innerHTML = "Foot Gear";
	document.getElementById("pic1").src = 'imgs/gears/f1.png';
	document.getElementById("pic2").src = 'imgs/gears/f2.png';
	document.getElementById("pic3").src = 'imgs/gears/f3.png';
});