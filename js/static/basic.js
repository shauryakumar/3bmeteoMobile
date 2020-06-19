function togglediv(toggleelem) {

	var toggleElem = document.getElementById(toggleelem);
    var displaySetting = toggleElem.style.display;

    if (displaySetting == 'block') {
      toggleElem.style.display = 'none';
    }
    else {
      toggleElem.style.display = 'block';
    }
  }
  
function togglemainnav(callingElem,divelem,headerelem,sectionelem) {
	
	var divElem = document.getElementById(divelem);
	var headerElem = document.getElementById(headerelem);
	var sectionElem = document.getElementById(sectionelem);
	
	if(!(divElem.classList.contains("open"))&&!(headerElem.classList.contains("open"))&&!(sectionElem.classList.contains("open")))
	{
	divElem.classList.add("open");
	headerElem.classList.add("open");
	sectionElem.classList.add("open");
	return;
	}
	divElem.classList.remove("open");
	headerElem.classList.remove("open");
	sectionElem.classList.remove("open");
}

function openToggleDiv(lielem) {
	var liElem = document.getElementById(lielem);
	if(!(liElem.classList.contains("open")))
	{
		liElem.classList.add("open");
		return;
	}
	liElem.classList.remove("open");
}


function addCurrentToNavDays(numCurrent) {
	var div = document.getElementById("nav_giorni");
	var allgliderElements = div.querySelectorAll(".navDays");
	div.querySelectorAll(".current")[0].classList.remove("current");
	allgliderElements[numCurrent].classList.add("current");
}

function activateDiv(ulist,numactive) {
	var uList = document.getElementById(ulist);
	var activeDiv = uList.querySelectorAll(".active")[0];
	activeDiv.classList.remove('active');
	
	var	liList = uList.getElementsByTagName("li");
	liList[numactive-1].classList.add("active");
	
	var headList = document.getElementById("heading");
	var divList = headList.querySelectorAll(".altriDati");
	var headActiveDiv = headList.querySelectorAll(".altriDatiM-active")[0];
	headActiveDiv.classList.remove('altriDatiM-active');
	divList[numactive-1].classList.add("altriDatiM-active");
	
	//do this for every data also
	var headDataList = document.querySelectorAll(".headingData");
	for(var i=0;i<4;i++) {
		var dataDiv = headDataList[i];
		var allData = dataDiv.querySelectorAll(".altriDati");
		var activeData = dataDiv.querySelectorAll(".altriDatiM-active")[0];
		activeData.classList.remove('altriDatiM-active');
		allData[numactive-1].classList.add("altriDatiM-active");
	}
}

function switchData(typeField,oppTypeField,dataField,oppDataField) {
	var typeDivs = document.querySelectorAll("."+typeField);
	[].forEach.call(typeDivs, function(div) {
		div.classList.add("active");
		div.classList.add("btn-arancio");
	});
	var oppTypeDivs = document.querySelectorAll("."+oppTypeField);
	[].forEach.call(oppTypeDivs, function(div) {
		div.classList.remove("active");
		div.classList.remove("btn-arancio");
	});
	var typeDataDivs = document.querySelectorAll("."+dataField);
	[].forEach.call(typeDataDivs, function(div) {
		div.classList.add("active");
	});
	var oppDataDivs = document.querySelectorAll("."+oppDataField);
	[].forEach.call(oppDataDivs, function(div) {
		div.classList.remove("active");
	});
}