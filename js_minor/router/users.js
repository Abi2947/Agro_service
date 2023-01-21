const { Router }= require ('express');
const router =Router();

const mysqlConnection = require('../database/db');

router.get('/',(req,res)=>{
    res.status(200).json('Server on port 8000 and database is connected');
});

router.get('/:users',(req,res)=>{
    mysqlConnection.query('SELECT * FROM users',(error,rows,fields)=>{
        if(!error)
        {
            res.json(rows);
        }
        else
        {
            consol.log(error);
        }
    });
});

router.get('/:users/:U_ID',(req,res)=>{
    const {U_ID}=req.params;
    mysqlConnection.query('SELECT * FROM users where U_ID =?;', [U_ID],(error,rows,fields)=>{
        if (!error)
        {
            res.json(rows);
        }
        else
        {
            console.log(error);
        }
    });

});

//Inserting users details to users table in MYSQL
router.post('/:users',(req,res)=>{
    const {U_ID,U_Username,U_Name, U_Address,U_Gender,U_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('insert into users(U_ID,U_Username,U_Name, U_Address,U_Gender,U_Contact_No) values(?,?,?,?);',
    [U_ID,U_Username,U_Name, U_Address,U_Gender,U_Contact_No],(error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User saved'});
        }
        else
        {
            console.log(error);
        }
    });
});

//Updating users details to users table in MYSQL
router.put('/:users/:U_ID',(req,res)=>{
    const {U_ID,U_Username,U_Name, U_Address,U_Gender,U_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('update users set U_Username = ?,U_Name = ?, U_Address = ?,U_Gender = ?, U_Contact_No = ?, where U_ID = ?;',
    [U_Username,U_Name, U_Address,U_Gender,U_Contact_No,U_ID],(error,rows,fields)=>{
        if(error)
        {
            res.json({Status:'User updated'});
        }
        else
        {
            console.log(error);
        }
    });
});

//Deleting users details to users table in MYSQL
router.delete('/:users/:U_ID',(req,res)=>{
    const {U_ID} = req.params;
    mysqlConnection.query('delete from users where id = ?;',[U_ID], (error,rows,fields)=>{
        if(!error)
        {
            res.json({Status:'User deleted'})
        }
        else
        {
            console.log(error);
        }
    });
});

module.exports = router;