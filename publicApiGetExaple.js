//http://openapi.mnd.go.kr/sample/xml/DS_WHLNAT_ROKAHSPT_ADDR/1/5/
const request = require('request');

var hospital,px,welfare,sale,festivals;

const url = 'http://openapi.mnd.go.kr';
const apiKey = '/sample';
const type = '/json';
const startIndex = '/1';
const lastIndex = '/5';

hospital();
px();
welfare();
sale();
festivals();

// 군 병원
function hospital(){
	let service = '/DS_WHLNAT_ROKAHSPT_ADDR';
	let api_url = url +apiKey +type +service +startIndex +lastIndex;
	
	var hosadd = new Array([]);
	
	request(api_url, (err, res, body)=>{
		var j = JSON.parse(body).DS_WHLNAT_ROKAHSPT_ADDR;

		for(var i in j.row){
			hosadd[i] = new Array([]);
			hosadd[i][5] =j.row[i].hsptnm;
			hosadd[i][0] =j.row[i].hspt_addr;
			hosadd[i][1] =j.row[i].zipcd;
			hosadd[i][2] =j.row[i].hspt_cntadr;
			hosadd[i][3] =j.row[i].ltd;
			hosadd[i][4] =j.row[i].lngt;
		}
		exports.hosadd = hosadd;
	});
}


//px판매상품
function px(){
	
	let service = '/DS_MND_PX_PARD_PRDT_INFO';
	let api_url = url +apiKey +type +service +startIndex +lastIndex;
	
	var pxpop = new Array([]);
	
	request(api_url, (err, res, body)=>{
		var j = JSON.parse(body).DS_MND_PX_PARD_PRDT_INFO;

		for(var i in j.row){
			pxpop[i] = new Array([]);
			pxpop[i][0] =j.row[i].prdtnm;
			pxpop[i][1] =j.row[i].seltnstd;
			pxpop[i][2] =j.row[i].sellyear;
			pxpop[i][3] =j.row[i].sellmonth;
		}
		exports.pxpop = pxpop;
	});
}


//복지시설
function welfare(){
	
	let service = '/DS_MNDT_WHLAM_WLFR_VCTNINSTL';
	let api_url = url +apiKey +type +service +startIndex +lastIndex;
	
	var wel = new Array([]);
	
	request(api_url, (err, res, body)=>{
		var j = JSON.parse(body).DS_MNDT_WHLAM_WLFR_VCTNINSTL;

		for(var i in j.row){
			wel[i] = new Array([]);
			wel[i][0] =j.row[i].seq;
			wel[i][1] =j.row[i].dvs;
			wel[i][2] =j.row[i].instltn_nm;
			wel[i][3] =j.row[i].addr;
			wel[i][4] =j.row[i].cntadr;
		}
		exports.wel = wel;
	});
}

//할인
function sale(){
	
	let service = '/DS_MND_ENLSTMN_DCNT_BEF_INF';
	let api_url = url +apiKey +type +service +startIndex +lastIndex;
	
	var sa = new Array([]);
	
	request(api_url, (err, res, body)=>{
		var j = JSON.parse(body).DS_MND_ENLSTMN_DCNT_BEF_INF;

		for(var i in j.row){
			sa[i] = new Array([]);
			sa[i][0] =j.row[i].rowno;
			sa[i][1] =j.row[i].rgn;
			sa[i][2] =j.row[i].instltnnm;
			sa[i][3] =j.row[i].dcntenatvnm;
			sa[i][4] =j.row[i].startday;
			sa[i][5] =j.row[i].fnshday;
			sa[i][6] =j.row[i].cntadr;
			sa[i][7] =j.row[i].hmpg;
			sa[i][8] =j.row[i].dtlexpln;
		}
		exports.sa = sa;
	});
}



//행사
function festivals(){
	
	let service = '/DS_ARMY_SECRTTOUR_ACTSPOTEXPRNC';
	let api_url = url +apiKey +type +service +startIndex +lastIndex;
	
	var festi = new Array([]);
	
	request(api_url, (err, res, body)=>{
		var j = JSON.parse(body).DS_ARMY_SECRTTOUR_ACTSPOTEXPRNC;

		for(var i in j.row){
			festi[i] = new Array([]);
			festi[i][0] =j.row[i].prgm_nm;
			festi[i][1] =j.row[i].prgm_perid;
			festi[i][2] =j.row[i].prgm_prps;
			festi[i][3] =j.row[i].prgm_expln;
			festi[i][4] =j.row[i].ptcptn_methd;
			festi[i][5] =j.row[i].guidnce;
			festi[i][6] =j.row[i].orginl_site_url;
		}
		exports.festi = festi;
	});
}

