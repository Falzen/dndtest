var _items = [
	{
		name: 'herb',
		type: 'item',//weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'heals 20hp',
		icon: '',
		isUseOnTouch: true,
		cost: 15,
		resell: 3,
		quantity: -1
	}
];
var ITEMS = makeMapByAttrFromList(_items);

var _weapons = [
	{

		name: 'sword',
		type: 'weapon',//weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'a double edge whort sword',
		icon: '',
		isUseOnTouch: false,
		cost: 40,
		resell: 16,
		hitChance: 4, // +4 to roll
		damage: '2d6',
		const: 1, // minus to damage recieved
		dex: 0, // bonus to AC
		isEquipped: false
	}
]
var WEAPONS = makeMapByAttrFromList(_weapons);
var _equipments = [
	{

		name: 'shield',
		type: 'shield',//weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'some wooden round shield',
		icon: '',
		isUseOnTouch: false,
		cost: 25,
		resell: 6,
		hitChance: 0, // +4 to roll
		damage: '1d4',
		const: 3, // minus to damage recieved
		ac: 3, // bonus to AC
		isEquipped: false
	},
	{

		name: 'boots',
		type: 'boots',//weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'some leather boots',
		icon: '',
		isUseOnTouch: false,
		cost: 25,
		resell: 5,
		hitChance: 0, // +4 to roll
		damage: null,
		const: 0, // minus to damage recieved
		dex: 1, // bonus to AC
		isEquipped: false
	}
];
console.log('_equipments : ', _equipments);
var EQUIPMENTS = makeMapByAttrFromList(_equipments);
console.log('EQUIPMENTS : ', EQUIPMENTS);

var _skills = [
	{
		name: 'double fist',
		type: 'skill', //weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'attack twice',
		icon: '',
		isUseOnTouch: false,
		cost: 0,
		resell: 0,
		quantity: -1,
		isAOE: false,
		hasCooldown: true,
		cooldown: 4, // nb of rounds, should decrement at end of round
		isSpell: false
	},
	{
		name: 'fireball',
		type: 'skill', //weapon, shield, helmet, armor, boots, gloves, skill, item
		description: 'a ball of fire',
		icon: '',
		isUseOnTouch: false,
		cost: 0,
		resell: 0,
		quantity: -1,
		isAOE: true,
		hasCooldown: true,
		cooldown: 3, // nb of rounds, should decrement at end of round
		isSpell: true
	}
];