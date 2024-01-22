let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

/* The querySectlor() method returns the first child element that matches a specified
CSS selector(s) of an element */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


// object are indicated by curly braces {}
//object properties are written as (name of the property) key: value (value that property holds) pairs
const locations = [
    {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"], //surround the property name with quotes because it has more than one word
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
},
{
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."

},
]; 


// initialize button
/*The onclick event generally occurs when the user clicks an element.It allows the programmer to
execute a javascript's function when an element gets clicked */
button1.onclick = goStore; // When you click this button you go to store
button2.onclick = goCave; // When you click this button you go to cave
button3.onclick = fightDragon;// when you click this button you fight dragon

// innerText returns all text contained by an element and all its child elements.
// It controls the text that appears in an HTML element.
// innerHtml on the other hand returns all text, including html tags, that is contained by an element. 

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onClick = location["button functions"][0];
    button2.onClick = location["button functions"][1];
    button3.onClick = location["button functions"][2];

    text.innerText = location.text;


}
/* The values that are declared within a function when the function is called are known as an argument
The variables that are defined when the function is declared are known as parameters 
These are used in function call statements to send value from the calling function to receiving function.*/
function goTown() {
    update(locations[0]); // This is passing the first element of the locations array into update function
    }

function goStore() {
    update(locations[1]);

}

function goCave() {
    console.log("Going to cave");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}


