let rolls = 0;

const items = [
    {
        name: "Common",
        chance: 60,
        sprite: "assets/sprites/common.png"
    },

    {
        name: "Uncommon",
        chance: 25,
        sprite: "assets/sprites/uncommon.png"
    },

    {
        name: "Rare",
        chance: 10,
        sprite: "assets/sprites/rare.png"
    },

    {
        name: "Epic",
        chance: 4,
        sprite: "assets/sprites/epic.png"
    },

    {
        name: "Legendary",
        chance: 1,
        sprite: "assets/sprites/legendary.png"
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

    spriteContainer.innerHTML =
        `<img id="spriteImage" src="${item.sprite}" alt="${item.name}">`;

    itemName.textContent =
        "✨ " + item.name + " ✨";
}
