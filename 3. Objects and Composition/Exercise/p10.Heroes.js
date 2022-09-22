function solve() {

    let castSpell = (mageState) => ({
        cast: function (spellName) {
            this.mana--;
            console.log(`${this.name} cast ${spellName}`)
        }
    });

    let mage = (name) => {
        let mageState = {
            name,
            health: 100,
            mana: 100,

        }
        return Object.assign(mageState, castSpell(mageState));
    };

    let fightEnemies = (fighterState) => ({
        fight: function () {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`)
        }
    });

    let fighter = (name) => {
        let fighterState = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(fighterState, fightEnemies(fighterState));
    }

    return { mage: mage, fighter: fighter };
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
