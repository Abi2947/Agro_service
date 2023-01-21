//creating connectiont to database

const mysql = require('mysql');

//providing acess to database
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abinash123',
    database: 'minor'
    
});

mysqlConnection.connect(function(error){
    if (error)
    {
        console.log(error);
        return;
    }

    else
    {
        console.log('Database is connected');
    }

});

module.exports = mysqlConnection;