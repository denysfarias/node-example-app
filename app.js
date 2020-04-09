const express = require('express');

let db;
if (process.env.MONGODB_URI) {
    db = require("./db");
}

const fetchQuote = require("./fetch");

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => { 
    const quote = fetchQuote();
    const timestamp = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    res.send(quote);
    console.log(`Quote served at ${timestamp}.`);
    if (db) {
        db.save(quote, timestamp);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));