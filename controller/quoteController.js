import Quote from '../models/quoteModel.js';

async function createQuote(req, res) {
    const {quote, author, published, title } = req.body;

    if (!quote || !author || !published || !title){
        res.send('Please fill out all fields.')
    }
    //const exists = User.findOne({username})

   // if (exists) {
   //     res.status(409).send('User exists')
   //     throw new Error('Username exists')
   // }

    const newQuote = Quote.create({
        quote, author, published, title
    })

    //if(newUser) {
   //     res.status(500).send('Error while creating user')
    //}

    return res.status(200).send('Quote successfully created')
}

export { createQuote };
