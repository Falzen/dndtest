

/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// variables
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

var settings = {
	sections : {
		'intro': false,
		'fighting': false,
		'town': false,
		'shop': false,
	},
	switchSection: function(ev) {
		let sectionName = ev.currentTarget.dataset.targetname;
		doSwitchSection(sectionName);

	},
	inventory: {
		tabs: {
			skills: false,
			equips: true,
			items: false
		},
		switchTab: function(ev) {
			let allTabTitles = document.getElementsByClassName('inventory-tab-title');
			for(let i = 0; i < allTabTitles.length; i++) {
				allTabTitles[i].classList.remove('is-selected');
			}
			let tabName = ev.currentTarget.dataset.targetname;
			ev.currentTarget.classList.add('is-selected');
			doSwitchInventoryTab(tabName);
		},
	}
};

function doSwitchSection(sectionName) {
	for(let key in settings.sections) {
		settings.sections[key] = false;
		if(key == sectionName) {
				settings.sections[key] = true;
		}
	}
}
function doSwitchInventoryTab(tabName) {
	for(let key in settings.inventory.tabs) {
		settings.inventory.tabs[key] = false;
		if(key == tabName) {
			settings.inventory.tabs[key] = true;
		}
	}
}
function test(ev) {
alert('yo');
}
const startingStats = {
	'name': 'name_test',
	'level': 1,
	'ac': 13,
	'str': 11,
	'const': 11,
	'intel': 11,
	'dex': 11,
	'luck': 11,
	'equipped': [
		{label: 'helmet', value: ''},
		{label: 'gloves', value: ''},
		{label: 'armor', value: ''},
		{label: 'boots', value: ''},
		{label: 'shield', value: ''}, 
		{label: 'weapon', value: ''}
	],
	'backpack': {
		equips: [
			// must be filled after player instanciation because contains methods (?) see: function init() 
		],
		items: [
			new Item_Entity(ITEMS.get('herb')[0]), 
		],
		skills: []
	}
}

var player = null;


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */


function init() {
	player = new Player(startingStats);
	let playerEquipment = [
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Weapon_Entity(WEAPONS.get('sword')[0])
	];
	player.backpack.equips = playerEquipment;
	console.log('player : ', player);
	doSwitchSection('town');

	rivets.bind($('#mainContainer'), {settings: settings, player: player});
	makeEquippedList();
}


$(document).ready(function() {
	init();
});






/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
// compute
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */

function makeEquippedList() {
	let playerEquipped = [
		{label: 'helmet', value: ''},
		{label: 'gloves', value: ''},
		{label: 'armor', value: ''},
		{label: 'boots', value: ''},
		{label: 'shield', value: ''}, 
		{label: 'weapon', value: ''}
	];
	// for each in inventory
	for(let i=0; i<player.backpack.equips.length; i++) {
		let eq = player.backpack.equips[i];
		// if equipment AND isEquipped
		console.log(eq.name + ' is equipped : ', eq.isEquipped);
		if(eq.isEquipped) {
			// set according to type
			for(let j=0; j<playerEquipped.length; j++) {
				if(
					playerEquipped[j].label == eq.type
					&& playerEquipped[j].value == ''
				) {
					playerEquipped[j].value = eq.name;
				}
			}
		}
	}
	player.equipped = playerEquipped;
}

function compilePlayerStats() {

}








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


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */














