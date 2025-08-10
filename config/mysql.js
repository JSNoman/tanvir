// let mysql = require('mysql');
// let db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kilagbebro'
// });

// db.connect((error) => {

//     if (error) {
//         console.error('error connecting: ' + error.stack);
//         return;
//     } else {
//         console.log('MYSQL Connected...');

//     }
// });

// module.exports = db; 


// getting-started.js
const mongoose = require('mongoose');

main().then(()=> console.log('Database Connected...')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://noman:noman@cluster0.2dkioud.mongodb.net/Price_Setup_Database');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = mongoose;


