const mongoose = require('mongoose')



mongoose.connect('mongodb://0.0.0.0:27017/EstoNoEsPinterest', {
    useNewUrlParser : true
})

.then(db => console.log('DB IS CONNECTED'))
.catch(err => console.error(err));