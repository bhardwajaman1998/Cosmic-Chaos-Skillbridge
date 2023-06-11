const mongoose = require('mongoose');

mongoose.set ('strictQuery' ,true) ;

const dbURI = 'mongodb+srv://skillbridge:skillbridge@skillbridge-development.7ydtqsx.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect ( dbURI, {useNewUrlParser: true});

mongoose.connection.on ('connected' , () => {
console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
console.log( 'Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
console.log ('Mongoose disconnected' ) ;
});

module.exports = mongoose