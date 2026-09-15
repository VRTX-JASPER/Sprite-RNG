let rolls = 0;

const items = [
    {
        name: "Common",
        chance: 60
    },

    {
        name: "Uncommon",
        chance: 25
    },

    {
        name: "Rare",
        chance: 10
    },

    {
        name: "Epic",
        chance: 4
    },

    {
        name: "Legendary",
        chance: 1
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

            document.getElementById("result").textContent =
                "✨ " + item.name + " ✨";

            break;
        }
    }
}
