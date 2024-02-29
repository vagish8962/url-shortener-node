const mongoose = require('mongoose');

 function connectToDb(url) {
     mongoose.connect(url)
        .then(() => {
            console.log('Connect to database');
        }).
        catch((err) => console.log(err));
}
module.exports = connectToDb;