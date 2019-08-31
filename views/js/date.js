var dateButton = document.getElementById('dateButton');

dateButton.onclick = function(){
	var date = document.getElementById('ipDate').value;

	
	var progress = document.getElementById('progressbar');
	
	var total = document.getElementById('total');
	var rest = document.getElementById('rest');
	var percent = document.getElementById('per');
	var ipDate1 = document.getElementById('ipDate1');
	var junDate1= document.getElementById('junDate1');
	
	//2017년1월3일
	var short = new Date(2017,1,3);
	var last = new Date(2020,6,16);
	var minus = 0 ;
	var ipDate = new Date(date);
	var junDate = new Date(date);
	var today = new Date();
	
	
	for(var k = 0; k<=1260 ;k += 13){
		if(ipDate/(1000*60*60*24) - short/ (1000*60*60*24) < k){
		break;
		}
		minus ++;
		if(minus >= 90){
			break;
		}
	}	
		
		junDate.setMonth(junDate.getMonth() + 21);
		junDate.setDate(junDate.getDate() - minus);
	
	
	
	
	var diff = (junDate.getTime() - ipDate.getTime()) / (1000*60*60*24);
	var now = (junDate.getTime() - today.getTime()) / (1000*60*60*24);
	
	progress.value = diff- Math.floor(now);
	progress.max = diff;
	
	junDate1.innerHTML = '전역일 : '+junDate.getFullYear() +'-'+ (junDate.getMonth()+1) +'-' +junDate.getDate() ;
	total.innerHTML = '당신의 총 복무일은 '+diff+' 일 이며,</br> 남은 복무일은 ' + Math.floor(now) + ' 일입니다.';
	percent.innerHTML = Math.floor( 100 - (Math.floor(now)/diff *100) ) + '%';
};