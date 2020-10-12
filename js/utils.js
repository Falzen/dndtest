
/** 
@str : must be ex: 3d6+6 
*/
function rollsWithMod(str, mod) {
	if(mod == undefined) {
		return rolls(str);
	}
	let r1 = rolls(str);
	let r2 = rolls(str);
	//console.log(r1 + ' vs ' + r2 + ' mod:' + mod); 
	let res = r1 > r2 ? mod ? r1 : r2 : mod ? r2 : r1;
	let debugMsg = 'Rolling ' + str + ' with ';
	debugMsg += mod ? 'advantage' : 'disadvantage';
	debugMsg += ' -> ' + res;
	console.log(debugMsg);
	return res
}
function rolls(str) {
	if(str.split('d') != null && str.split('d').length != 2) {
		return null;
	}
	let result = 0;
	let staticBonus = 0;
	let nbDice = parseInt(str.split('d')[0]);
	let mods = str.split('d')[1];
	let typeDice = mods.split('+')[0];
	if(mods.split('+').length == 2) {
		staticBonus = parseInt(mods.split('+')[1]);
	}
	for(let i=0; i<nbDice; i++) {
		result += getRandomInt(1, typeDice);
	}
	result += staticBonus;
	console.log('rolling ' + str + ' -> ' + result);
	return result;
}

function roll(d) {
	return getRandomInt(1, d);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function roundTo1(nb) {
	return Math.round(nb*10) / 10;
}
function makeMapByAttrFromList(list, attrName) {
	if(!attrName) {
		attrName = 'name';
	}
	let tempMap = new Map();
	for (var i = 0; i < list.length; i++) {
		let elem = list[i];
		if(tempMap.get(elem[attrName]) != null) {
			let tempList = tempMap.get(elem[attrName]);
			tempList.push(elem);
			tempMap.set(elem[attrName], tempList);
		} else {
			tempMap.set(elem[attrName], [elem]);
		}
	}
	return tempMap;
}