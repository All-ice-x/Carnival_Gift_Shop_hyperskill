const input = require('sync-input');

const giftList = [
    {name: 'Teddy Bear', price: 10, id: 1},
    {name: 'Big Red Ball', price: 5, id: 2},
    {name: 'Huge Bear', price: 50, id: 3},
    {name: 'Candy', price: 8, id: 4},
    {name: 'Stuffed Tiger', price: 15, id: 5},
    {name: 'Stuffed Dragon', price: 30, id: 6},
    {name: 'Skateboard', price: 100, id: 7},
    {name: 'Toy Car', price: 25, id: 8},
    {name: 'Basketball', price: 20, id: 9},
    {name: 'Scary Mask', price: 75, id: 10},
];
let option;
let tickets = 0;

function greetings() {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!\nHere\'s the list of gifts:\n`);
}

function showList() {
    return giftList.forEach(element =>
        console.log(`${element.id}- ${element.name}, Cost: ${element.price} tickets`),
    );
}

function whatDoYouWant() {
    return Number(input(`\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`));
}

function sayGoodBye() {
    console.log('Have a nice day!');
}

greetings();
showList();

while (true) {
    option = whatDoYouWant();
    if (isNaN(option)) {
        console.log('Please enter a valid number!');
    } else if (option < 1 || 5 < option) {
        console.log('Please enter a valid number!');
    }
    switch (option) {
        case 1:
            if (giftList.length === 0) {
                console.log('\nWow! There are no gifts to buy.')
                break;
            }
            let giftId = Number(input(`Enter the number of the gift you want to get:\n`));
            if (isNaN(giftId)) {
                console.log('Please enter a valid number!');
                break;
            }
            let index = giftList.findIndex(i => i.id === giftId)
            let result = giftList[index];
            if (typeof result === 'undefined') {
                console.log('There is no gift with that number!')
                break;
            } else if (tickets < result.price) {
                console.log('You don\'t have enough tickets to buy this gift.')
                break;
            }

            tickets = tickets - result.price;
            console.log(`Here you go, one ${result.name}!\nTotal tickets: ${tickets}`);
            giftList.splice(index, 1);
            break;
        case 2:
            let addedTickets = Number(input(`Enter the ticket amount:\n`));
            if (isNaN(addedTickets) || addedTickets < 0 || addedTickets > 1000) {
                console.log('Please enter a valid number between 0 and 1000.');
                break;
            }
            tickets = tickets + addedTickets;
            console.log(`Total tickets: ${tickets}`);
            break;
        case 3:
            console.log(`Total tickets: ${tickets}`);
            break;
        case 4:
            console.log('Here\'s the list of gifts:\n');
            if (giftList.length === 0) {
                console.log('\nWow! There are no gifts to buy.')
                break;
            }
            giftList.forEach(element =>
                console.log(`${element.id}- ${element.name}, Cost: ${element.price} tickets`),
            );
            break;
        case 5:
            sayGoodBye();
            process.exit(0);
    }
}


