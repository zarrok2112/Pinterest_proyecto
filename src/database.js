const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pinterest_proyecto', {
    useNewUrlParser : true
})
.then(db => console.log('DB IS CONNECTED'))
.catch(err => console.error(err));