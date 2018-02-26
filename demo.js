var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var bgText = document.getElementById("bgText");
var num1 = 1
var num2 = 1
var num3 = 1
var num4 = 1
prev.addEventListener("click", function(){
	if(c1.checked){
		if(num1 == 1){
			num1 = 3;
			document.getElementById("pic1").src = 'imgs/gears/h'+num1+'.png';
		} else if(1 < num1 <= 3){
			num1 = num1 - 1;
			document.getElementById("pic1").src = 'imgs/gears/h'+num1+'.png';
	    }
    } else if(c2.checked){
		if(num2 == 1){
			num2 = 3;
			document.getElementById("pic2").src = 'imgs/gears/b'+num2+'.png';
		} else if(1 < num2 <= 3){
			num2 = num2 - 1;
			document.getElementById("pic2").src = 'imgs/gears/b'+num2+'.png';
	    }	
	} else if(c3.checked){
		if(num3 == 1){
			num3 = 3;
			document.getElementById("pic3").src = 'imgs/gears/l'+num3+'.png';
		} else if(1 < num3 <= 3){
			num3 = num3 - 1;
			document.getElementById("pic3").src = 'imgs/gears/l'+num3+'.png';
	    }	
	} else if(c4.checked){
		if(num4 == 1){
			num4 = 3;
			document.getElementById("pic4").src = 'imgs/gears/f'+num4+'.png';
		} else if(1 < num4 <= 3){
			num4 = num4 - 1;
			document.getElementById("pic4").src = 'imgs/gears/f'+num4+'.png';
	    }	
	} else{
		alert("Choose an picture");
	}
		
});

next.addEventListener("click", function(){
	if(c1.checked){
		if(num1 == 3){
			num1 = 1;
			document.getElementById("pic1").src = 'imgs/gears/h'+num1+'.png';
		} else if(1 <= num1 < 3){
			num1 = num1 + 1;
			document.getElementById("pic1").src = 'imgs/gears/h'+num1+'.png';
	    }
    } else if(c2.checked){
		if(num2 == 3){
			num2 = 1;
			document.getElementById("pic2").src = 'imgs/gears/b'+num2+'.png';
		} else if(1 <= num2 < 3){
			num2 = num2 + 1;
			document.getElementById("pic2").src = 'imgs/gears/b'+num2+'.png';
	    }	
	} else if(c3.checked){
		if(num3 == 3){
			num3 = 1;
			document.getElementById("pic3").src = 'imgs/gears/l'+num3+'.png';
		} else if(1 <= num3 < 3){
			num3 = num3 + 1;
			document.getElementById("pic3").src = 'imgs/gears/l'+num3+'.png';
	    }	
	} else if(c4.checked){
		if(num4 == 3){
			num4 = 1;
			document.getElementById("pic4").src = 'imgs/gears/f'+num4+'.png';
		} else if(1 <= num4 < 3){
			num4 = num4 + 1;
			document.getElementById("pic4").src = 'imgs/gears/f'+num4+'.png';
	    }	
	} else{
		alert("Choose an picture");
	}
		
});

bgText.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(bgText.value == "combo1"){
			num1, num2, num3, num4 = 1;
			document.getElementById("pic1").src = 'imgs/gears/h1.png';
			document.getElementById("pic2").src = 'imgs/gears/b1.png';
			document.getElementById("pic3").src = 'imgs/gears/l1.png';
			document.getElementById("pic4").src = 'imgs/gears/f1.png';
		} else if(bgText.value == "combo2"){
			num1, num2, num3, num4 = 2;
			document.getElementById("pic1").src = 'imgs/gears/h2.png';
			document.getElementById("pic2").src = 'imgs/gears/b2.png';
			document.getElementById("pic3").src = 'imgs/gears/l2.png';
			document.getElementById("pic4").src = 'imgs/gears/f2.png';
		} else if(bgText.value == "combo3"){
			num1, num2, num3, num4 = 3;
			document.getElementById("pic1").src = 'imgs/gears/h3.png';
			document.getElementById("pic2").src = 'imgs/gears/b3.png';
			document.getElementById("pic3").src = 'imgs/gears/l3.png';
			document.getElementById("pic4").src = 'imgs/gears/f3.png';
		} else if(bgText.value == "random"){
			num1 = Math.floor((Math.random() * 3) + 1);
			num2 = num1;
			num3 = num1;
			num4 = num1;
			document.getElementById("pic1").src = 'imgs/gears/h'+num1+'.png';
			document.getElementById("pic2").src = 'imgs/gears/b'+num2+'.png';
			document.getElementById("pic3").src = 'imgs/gears/l'+num3+'.png';
			document.getElementById("pic4").src = 'imgs/gears/f'+num4+'.png';
		}
	}
});