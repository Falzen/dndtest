
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

        this.equipped = data.equipped;

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
        this.spells = null;
    }
}


class Object_Entity {
    constructor(data) {
        this.name = data.name;
		this.type = data.type;//Equipment, UsableItem, Weapon, Skill, Spell
		this.description = data.description;
		this.icon = data.icon;
		this.isUseOnTouch = data.isUseOnTouch;
	}

    doEffect(effectData) {
        return `${this.name} used ${effectData}.`;
    }
	
}

class Item_Entity extends Object_Entity {
    constructor(data) {
	    super(data);
		this.cost = data.cost;
		this.resell = data.resell;
		this.quantity = data.quantity;
	}
}

class Equipment_Entity extends Item_Entity {
    constructor(data) {
	    super(data);
		this.quantity = 1;
    	this.isEquipped = data.isEquipped;
    }
}

class UsableItem_Entity extends Item_Entity {
    constructor(data) {
	    super(data);
	    this.quantity = data.quantity
	}
}


class Weapon_Entity extends Equipment_Entity {
    constructor(data) {
	    super(data);
		this.hitChance = data.hitChance;
		this.damage = data.damage;
		this.defense = data.defense;
		this.dexterity = data.dexterity;
	}
}

class Skill_Entity extends Object_Entity {
    constructor(data) {
	    super(data);
  		this.isAOE = data.isAOE;
  		this.hasCooldown = data.hasCooldown;
		this.cooldown = data.cooldown;
	}
}

class Spell_Entity extends Object_Entity {
    constructor(data) {
	    super(data);
  		this.isAOE = data.isAOE;
  		this.hasCooldown = data.hasCooldown;
		this.cooldown = data.cooldown;
	}
}