```javascript
let rolls = 0;

const items = [

    // =====================
    // RARE — SPRITES 1-8
    // =====================

    {
        name: "Sprite 1",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_1.png"
    },

    {
        name: "Sprite 2",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_2.png"
    },

    {
        name: "Sprite 3",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_3.png"
    },

    {
        name: "Sprite 4",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_4.png"
    },

    {
        name: "Sprite 5",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_5.png"
    },

    {
        name: "Sprite 6",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_6.png"
    },

    {
        name: "Sprite 7",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_7.png"
    },

    {
        name: "Sprite 8",
        rarity: "Rare",
        chance: 10,
        sprite: "assets/sprites/sprite_8.png"
    },


    // =====================
    // EPIC — SPRITES 9-12
    // =====================

    {
        name: "Sprite 9",
        rarity: "Epic",
        chance: 3,
        sprite: "assets/sprites/sprite_9.png"
    },

    {
        name: "Sprite 10",
        rarity: "Epic",
        chance: 3,
        sprite: "assets/sprites/sprite_10.png"
    },

    {
        name: "Sprite 11",
        rarity: "Epic",
        chance: 3,
        sprite: "assets/sprites/sprite_11.png"
    },

    {
        name: "Sprite 12",
        rarity: "Epic",
        chance: 3,
        sprite: "assets/sprites/sprite_12.png"
    },


    // ==========================
    // LEGENDARY — SPRITES 13-14
    // ==========================

    {
        name: "Sprite 13",
        rarity: "Legendary",
        chance: 2,
        sprite: "assets/sprites/sprite_13.png"
    },

    {
        name: "Sprite 14",
        rarity: "Legendary",
        chance: 2,
        sprite: "assets/sprites/sprite_14.png"
    },


    // =====================
    // MYTHIC — SPRITES 15-16
    // =====================

    {
        name: "Sprite 15",
        rarity: "Mythic",
        chance: 0.5,
        sprite: "assets/sprites/sprite_15.png"
    },

    {
        name: "Sprite 16",
        rarity: "Mythic",
        chance: 0.5,
        sprite: "assets/sprites/sprite_16.png"
    }

];


function roll() {

    rolls++;

    document.getElementById("rolls").textContent = rolls;

    let random = Math.random() * 100;

    let total = 0;

    for (let item of items) {

        total += item.chance;

        if (random <= total) {

            showItem(item);

            break;
        }
    }
}


function showItem(item) {

    const spriteContainer =
        document.getElementById("spriteContainer");

    const itemName =
        document.getElementById("itemName");

    const rarity =
        document.getElementById("rarity");


    spriteContainer.innerHTML = `
        <img
            id="spriteImage"
            src="${item.sprite}"
            alt="${item.name}"
        >
    `;


    itemName.textContent = item.name;

    rarity.textContent = item.rarity;
}
```
