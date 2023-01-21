const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 8000);

//Middlewares
app.use(express.json());


//Routes
//Users routes
app.use(require('./router/users'));
//farmers routes
app.use(require('./router/farmers'));
//Machines routes
app.use(require('./router/machines'));
//Plots routes
app.use(require('./router/plots'));


//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server is running on port', app.get('port'));
});