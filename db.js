const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const RESPONSES_COLLECTION = 'responses';

const quoteSchema = new mongoose.Schema(
    {
        quote: String,
        timestamp: String
    }, 
    { collection: RESPONSES_COLLECTION }
);

function save(quoteText, timestamp) {
    const quotesModel = mongoose.model(RESPONSES_COLLECTION, quoteSchema, RESPONSES_COLLECTION);
    const quote = new quotesModel({ quote: quoteText, timestamp });
    quote.save(function(err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Quote saved!");
        }
    });
}
 
module.exports = { save: save };