/*
	Created on Aug 2019
	ID User Dicoding : 445800 
	Nama : Agung Pambudi
	Email : agung.pambudi5595@gmail.com
*/

document.getElementById("content_1").style.background = "#333";
document.getElementById("content_1").style.borderBottom = "5px solid #6CF";

document.getElementById("content_1").onclick = function() { 
	document.getElementById("content_a").style.visibility = "visible";
	document.getElementById("content_b").style.visibility = "hidden";
	document.getElementById("content_c").style.visibility = "hidden";

	document.getElementById("content_1").style.background = "#333";
	document.getElementById("content_1").style.borderBottom = "5px solid #6CF";
	document.getElementById("content_2").style.background = "none";
	document.getElementById("content_2").style.borderBottom = "none";
	document.getElementById("content_3").style.background = "none";
	document.getElementById("content_3").style.borderBottom = "none";
} 

document.getElementById("content_2").onclick = function() { 
	document.getElementById("content_a").style.visibility = "hidden";
	document.getElementById("content_b").style.visibility = "visible";
	document.getElementById("content_c").style.visibility = "hidden";

	document.getElementById("content_1").style.background = "none";
	document.getElementById("content_1").style.borderBottom = "none";
	document.getElementById("content_2").style.background = "#333";
	document.getElementById("content_2").style.borderBottom = "5px solid #6CF";
	document.getElementById("content_3").style.background = "none";
	document.getElementById("content_3").style.borderBottom = "none";
} 

document.getElementById("content_3").onclick = function() { 
	document.getElementById("content_a").style.visibility = "hidden";
	document.getElementById("content_b").style.visibility = "hidden";
	document.getElementById("content_c").style.visibility = "visible";

	document.getElementById("content_1").style.background = "none";
	document.getElementById("content_1").style.borderBottom = "none";
	document.getElementById("content_2").style.background = "none";
	document.getElementById("content_2").style.borderBottom = "none";
	document.getElementById("content_3").style.background = "#333";
	document.getElementById("content_3").style.borderBottom = "5px solid #6CF";
} 