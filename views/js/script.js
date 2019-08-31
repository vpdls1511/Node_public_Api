const $main = document.getElementById('main');
const $hospital = document.getElementById('hospital');
const $px = document.getElementById('px');
const $welfare = document.getElementById('welfare');
const $sale = document.getElementById('sale');
const $festivals = document.getElementById('festivals');

window.onload = function(){
	var active = document.getElementsByClassName('active');
	for (var i=0;i<active.length;i+=1){
  		active[i].style.display = 'block';
	}
};

function homeClick(){
	$main.style.display = 'block';
	$hospital.style.display = 'none';
	$px.style.display = 'none';
	$welfare.style.display = 'none';
	$sale.style.display = 'none';
	$festivals.style.display = 'none';
}
function hospital(){
	$main.style.display = 'none';
	$hospital.style.display = 'block';
	$px.style.display = 'none';
	$welfare.style.display = 'none';
	$sale.style.display = 'none';
	$festivals.style.display = 'none';
}

function px(){
	$main.style.display = 'none';
	$hospital.style.display = 'none';
	$px.style.display = 'block';
	$welfare.style.display = 'none';
	$sale.style.display = 'none';
	$festivals.style.display = 'none';
}

function welfare(){
	$main.style.display = 'none';
	$hospital.style.display = 'none';
	$px.style.display = 'none';
	$welfare.style.display = 'block';
	$sale.style.display = 'none';
	$festivals.style.display = 'none';
}

function sale(){
	$main.style.display = 'none';
	$hospital.style.display = 'none';
	$px.style.display = 'none';
	$welfare.style.display = 'none';
	$sale.style.display = 'block';
	$festivals.style.display = 'none';
}

function festivals(){
	$main.style.display = 'none';
	$hospital.style.display = 'none';
	$px.style.display = 'none';
	$welfare.style.display = 'none';
	$sale.style.display = 'none';
	$festivals.style.display = 'block';
}