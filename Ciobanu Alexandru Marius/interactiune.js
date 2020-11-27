var i = 0;
var imagini = [];
var timp = 3000;
imagini[0] = 'Screenshot_1.png';
imagini[1] = 'Screenshot_2.png';
imagini[2] = 'Screenshot_3.png';
imagini[3] = 'Screenshot_4.png';
imagini[4] = 'Screenshot_5.png';

function changeImg(){
	document.slide.src=imagini[i];
	
	if(i < imagini.length - 1){
		document.getElementById("poza").style.display = "none"; 
		document.getElementById("poza1").style.display = "none"; 
		document.getElementById("poza2").style.display = "none"; 
		document.getElementById("poza3").style.display = "none"; 
		document.getElementById("poza4").style.display = "none"; 
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", timp);
}
