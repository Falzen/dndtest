

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
	},
	currentStats: {
		level: 0,
		ac: 0,
		str: 0,
		const: 0,
		intel: 0,
		dex: 0,
		luck: 0
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
	var temp = EQUIPMENTS.get('boots')[0];
	let playerEquipment = [
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		new Weapon_Entity(WEAPONS.get('sword')[0])
	];
	player.backpack.equips = playerEquipment;
	doSwitchSection('town');

	rivets.bind($('#mainContainer'), {settings: settings, player: player});
	makeEquippedList();
	compilePlayerStats();
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
	settings.currentStats.level = player.level;
	settings.currentStats.ac = player.ac;
	settings.currentStats.str = player.str;
	settings.currentStats.const = player.const;
	settings.currentStats.intel = player.intel;
	settings.currentStats.dex = player.dex;
	settings.currentStats.luck = player.luck;

	// for each equipped item in inventory
	for(let i=0; i<player.backpack.equips.length; i++) {
		let eq = player.backpack.equips[i];
		if(eq.isEquipped) {
			if(eq.ac) {
				settings.currentStats.ac += parseInt(eq.ac);
			}
			if(eq.str) {
				settings.currentStats.str += parseInt(eq.str);
			}
			if(eq.const) {
				settings.currentStats.const += parseInt(eq.const);
			}
			if(eq.intel) {
				settings.currentStats.intel += parseInt(eq.intel);
			}
			if(eq.dex) {
				settings.currentStats.dex += parseInt(eq.dex);
			}
			if(eq.luck) {
				settings.currentStats.luck += parseInt(eq.luck);
			}
		}
	}
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














