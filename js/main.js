

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
	'equipped': {
		head: '',
		body: '',
		legs: new Equipment_Entity(EQUIPMENTS.get('boots')[0]),
		leftHand: new Equipment_Entity(EQUIPMENTS.get('shield')[0]),
		rightHand: new Weapon_Entity(WEAPONS.get('sword')[0])
	}
}

var player = null;


/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */
/* = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = - = */


function init() {
	rivets.bind($('#mainContainer'), {settings: settings});
	player = new Player(startingStats);
	console.log(player);
	doSwitchSection('town');
}


$(document).ready(function() {
	init();
});




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














