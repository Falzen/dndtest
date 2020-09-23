
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// templates
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
var _items = [
	{
		name: 'herb',
		type: '',
		description: 'heals 20hp',
		icon: '',
		isUseOnTouch: true,
		cost: 15,
		resell: 3,
		quantity: -1
	}
];

var _weapons = [
	{

		'name': 'sword',
		'type': 'Weapon',//Equipment, UsableItem, Weapon, Skill, Spell
		'description': 'a double edge whort sword',
		'icon': '',
		'isUseOnTouch': false,
		'cost': 40,
		'resell': 16,
		'hitChance': 4, // +4 to roll
		'damage': '2d6',
		'defense': 1, // minus to damage recieved
		'dexterity': 0, // bonus to AC
		'isEquipped': false
	}
]
var _equipments = [
	{

		'name': 'shield',
		'type': 'Equipment',//Equipment, UsableItem, Weapon, Skill, Spell
		'description': 'some wooden round shield',
		'icon': '',
		'isUseOnTouch': false,
		'cost': 25,
		'resell': 6,
		'hitChance': 0, // +4 to roll
		'damage': '1d4',
		'defense': 3, // minus to damage recieved
		'dexterity': 3, // bonus to AC
		'isEquipped': false
	},
	{

		'name': 'boots',
		'type': 'Equipment',//Equipment, UsableItem, Weapon, Skill, Spell
		'description': 'some leather boots',
		'icon': '',
		'isUseOnTouch': false,
		'cost': 25,
		'resell': 5,
		'hitChance': 0, // +4 to roll
		'damage': null,
		'defense': 0, // minus to damage recieved
		'dexterity': 1, // bonus to AC
		'isEquipped': false
	}
];

var _skills = [
	{
		name: 'double fist',
		type: 'Spell', //Equipment, UsableItem, Weapon, Skill, Spell
		description: 'attack twice',
		icon: '',
		isUseOnTouch: false,
		cost: 0,
		resell: 0,
		quantity: -1,
		isAOE: false,
		hasCooldown: true,
		cooldown: 4 // nb of rounds, should decrement at end of round
	}
];
var _spells = [
	{
		name: 'fireball',
		type: 'Spell', //Equipment, UsableItem, Weapon, Skill, Spell
		description: 'a ball of fire',
		icon: '',
		isUseOnTouch: false,
		cost: 0,
		resell: 0,
		quantity: -1,
		isAOE: true,
		hasCooldown: true,
		cooldown: 3 // nb of rounds, should decrement at end of round
	}
];

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */









/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// factories
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */


class Character {
    constructor(data) {
        this.name = data.name;
        this.level = data.level;
        this.ac = data.ac;
        this.str = data.str;
        this.const = data.const;
        this.intel = data.intel;
        this.dex = data.dex;
        this.luck = data.luck;

        this.equipment = data.equipment;

    }

    // Adding a method to the constructor
    // NB: fucking works !
    greet() {
        return `${this.name} says hello.`;
    }
}

class Player extends Character {
    constructor(data) {
        // Chain constructor with super
        super(data);

        // Add a new property
        this.spells = spellsByLevel.get(data.level);
    }
}

var Object_Entity = function() {
	let name = data.name;
	let type = data.type;//Equipment, UsableItem, Weapon, Skill, Spell
	let description = data.description;
	let icon = data.icon;
	let isUseOnTouch = data.isUseOnTouch;
	this.doEffect = function (effectData) {}
}

var Item_Entity = function(data) {
  	Object_Entity.call(this, data);
	let cost = data.cost;
	let resell = data.resell;
	let quantity = data.quantity;
}

var Equipment_Entity = function(data) {
  	Item_Entity.call(this, data);
	let isEquipped = data.isEquipped;
}

var UsableItem_Entity = function(data) {
  	Item_Entity.call(this, data);
	let quantity = data.quantity;
}

var Weapon = function(data) {
	Equipment_Entity.call(this, data);
	let hitChance = data.hitChance;
	let damage = data.damage;
	let defense = data.defense;
	let dexterity = data.dexterity;
}

var Skill = function(data) {
  	Object_Entity.call(this, data);
  	let isAOE = data.isAOE;
  	let hasCooldown = data.hasCooldown;
	let cooldown = data.cooldown;
}

var Spell = function(data) {
  	Object_Entity.call(this, data);
  	let isAOE = data.isAOE;
  	let hasCooldown = data.hasCooldown;
	let cooldown = data.cooldown;
}

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */











/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// variables
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

var settings = {
	sections : {
		'intro': false,
		'fighting': false
	},
	currentSection: '',
	inventory: {
		tabs: {
			skills: false,
			magics: false,
			items: false
		}
	}
};

var equipmentList = [];
const equipmentsByName = makeMapByAttrFromList(equipmentList, 'name');

var spellsList = [];
const spellsByLevel = makeMapByAttrFromList(spellsList, 'level');
const spellsByName = makeMapByAttrFromList(spellsList, 'name');

const startingStats = {
	'name': 'name_test',
	'level': 1,
	'ac': 13,
	'str': 11,
	'const': 11,
	'intel': 11,
	'dex': 11,
	'luck': 11,
	'equipment': {
		head: '',
		body: '',
		legs: equipmentsByName.get('boots'),
		leftHand: equipmentsByName.get('shield'),
		rightHand: equipmentsByName.get('sword')
	}
}

var player = null;


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */


















/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */




function init() {
	rivets.bind($('#mainContainer'), {settings: settings, spellsList: spellsList});
	player = new Player(startingStats);
	console.log(player);
	setNewSection('intro');
}


$(document).ready(function() {
	init();
});









/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// events listeners
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

$(document).on('click', '#jouer-btn', function(ev) {
	let sectionName = ev.currentTarget.dataset.sectiontoshow;
	if(sectionName) {
		setNewSection(sectionName);
	}
});

$(document).on('click', '.tab-title', function(ev) {
	let tabName = ev.currentTarget.dataset.tabname;
	if(tabName) {
		showTab(tabName);
	}
});

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */







/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// displays
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

function showTab(tabName) {
	for(let key in settings.inventory.tabs) {
		settings.inventory.tabs[key] = false;
		if(key == tabName) {
				settings.inventory.tabs[key] = true;
		}
	}
}

function setNewSection(sectionName) {
	for(let key in settings.sections) {
		settings.sections[key] = false;
		if(key == sectionName) {
				settings.sections[key] = true;
		}
	}
	settings.currentSection = sectionName;
}

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */















/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// utils
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

/** 
@str : must be ex: 3d6+6 
*/

function rollsWithMod(str, mod) {
	let r1 = rolls(str);
	let r2 = rolls(str);
	//console.log(r1 + ' vs ' + r2 + ' mod:' + mod); 
	return r1 > r2 ? mod ? r1 : r2 : mod ? r2 : r1;
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