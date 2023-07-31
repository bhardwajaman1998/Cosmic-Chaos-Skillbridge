const db = process.env.DATABASE;
const mongoose = require('mongoose');

mongoose.set ('strictQuery' ,true) ;

const dbURI = db;


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