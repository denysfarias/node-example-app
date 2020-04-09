const fetch = require("node-fetch");

let quotes;

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quotes = data;
        console.log('Quotes ready!');
    });

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomQuote() {
    const quote = quotes[getRandomInt(quotes.length)];
    return `"${quote.text}" - ${quote.author}`;
}

module.exports = getRandomQuote;