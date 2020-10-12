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
var WEAPONS = makeMapByAttrFromList(_weapons);
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
var EQUIPMENTS = makeMapByAttrFromList(_equipments);

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