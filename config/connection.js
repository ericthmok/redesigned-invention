const mongooese = require('mongoose');

mongooese.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;