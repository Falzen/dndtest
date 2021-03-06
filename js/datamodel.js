
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
        this.backpack = data.backpack;

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
		this.type = data.type;//weapon, shield, helmet, armor, boots, gloves, skill, item
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

        this.hitChance = data.hitChance;
        this.damage = data.damage;

        this.ac = data.ac;
        this.str = data.str;
        this.const = data.const;
        this.intel = data.intel;
        this.dex = data.dex;
        this.luck = data.luck;
    }

    toggleEquipmentStatus(ev, model) {
        if(model.eq.isEquipped) {
            model.eq.isEquipped = false;
        } else {
            // unequip all similar type items
            for(let i=0; i<player.backpack.equips.length; i++) {
                let eq = player.backpack.equips[i];
                if(eq.type == model.eq.type) {
                    eq.isEquipped = false;
                }
            }
            model.eq.isEquipped = !model.eq.isEquipped;
        }
        makeEquippedList();
        compilePlayerStats();
        return;

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
		this.def = data.def;
		this.dex = data.dex;
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

// class Spell_Entity extends Object_Entity {
//     constructor(data) {
// 	    super(data);
//   		this.isAOE = data.isAOE;
//   		this.hasCooldown = data.hasCooldown;
// 		this.cooldown = data.cooldown;
// 	}
// }