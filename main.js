// Main.js

var loot = 0;
var purses = 0;

function clickSteal(number){
	loot = loot + number;
	document.getElementById("loot").innerHTML = loot;
};

function purseUp(){
	var purseCost = Math.floor(10 * Math.pow(1.1,purses));
	if(loot >= purseCost){
		purses = purses + 1;
		loot = loot - purseCost;
		document.getElementById('loot').innerHTML = loot;
		document.getElementById('purses').innerHTML = purses;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,purses));
	document.getElementById('cost').innerHTML = nextCost;
};

function save(){
	var save = {
		loot: loot,
		purses: purses
	}
	localStorage.setItem("save",JSON.stringify(save));
}


window.setInterval(function(){
	clickSteal(purses);
	save();
}, 1000);