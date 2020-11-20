const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ger_user1:R5RNCjwFZKwEZcz7@cluster0.r7iev.mongodb.net/mevn-pagination?retryWrites=true&w=majority', {
   useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));