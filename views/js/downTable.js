//festivals
var fper = document.querySelectorAll('#fB');
var fBshow = document.querySelectorAll('#fBshow');
//Hospital Maps
var vMaps = document.querySelectorAll('#viewMaps');
var vMapsShow = document.querySelectorAll('#map');


//Festivals
function tr_click(idx){
	fper[idx].onclick = function(){
		if( fBshow[idx].style.display == "block" ){
			fBshow[idx].style.display="none";
			fBshow[idx].parentNode.style.padding='0px 0px 0px 0px';
		} else {
			fBshow[idx].style.display="block";
			fBshow[idx].parentNode.style.padding='15px 15px 15px 15px';
		}
    };
}
for(var i=0; i<fper.length; i++){
  	tr_click(i);
	fBshow[i].style.display='none';
	fBshow[i].parentNode.parentNode.style.height='0px';
	fBshow[i].parentNode.style.margin='0px 0px 0px 0px';
	fBshow[i].parentNode.style.padding='0px 0px 0px 0px';
	fBshow[i].parentNode.style.border='0px';
}


//Maps
function mapClick(idx){
	vMaps[idx].onclick = function(){
		if( vMapsShow[idx].style.display == "block" ){
			vMapsShow[idx].style.display="none";
		} else {
			vMapsShow[idx].style.display="block";
		}
    };
}
for(var i=0; i<fper.length; i++){
  	mapClick(i);
	vMapsShow[i].style.display='none';
	vMapsShow[i].parentNode.parentNode.style.height='0px';
	vMapsShow[i].parentNode.style.margin='0px 0px 0px 0px';
	vMapsShow[i].parentNode.style.padding='0px 0px 0px 0px';
	vMapsShow[i].parentNode.style.border='0px';
}
