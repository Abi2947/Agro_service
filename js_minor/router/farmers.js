const { Router }= require ('express');
const router =Router();

const mysqlConnection = require('../database/db');

router.get('/',(req,res)=>{
    res.status(200).json('Server on port  8000 and database is connected');
});

router.get('/:farmers',(req,res)=>{
    mysqlConnection.query('SELECT * FROM farmers',(error,rows,fields)=>{
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

router.get('/:farmers/:F_ID',(req,res)=>{
    const {F_ID}=req.params;
    mysqlConnection.query('SELECT * FROM farmers where F_ID =?;', [F_ID],(error,rows,fields)=>{
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

//Inserting farmers details to farmers table in MYSQL
router.post('/:farmers',(req,res)=>{
    const {F_ID,F_Name, F_Address,F_Gender,F_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('insert into farmers(F_ID,F_Name, F_Address,F_Gender,F_Contact_No) values(?,?,?,?);',
    [F_ID,F_Name, F_Address,F_Gender,F_Contact_No],(error,rows,fields)=>{
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

//Updating farmers details to farmers table in MYSQL
router.put('/:farmers/:F_ID',(req,res)=>{
    const {F_ID,F_Name, F_Address,F_Gender,F_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('update farmers set F_Name = ?, F_Address = ?, F_Gender = ?, F_Contact_No = ?, where F_ID = ?;',
    [F_ID,F_Name, F_Address,F_Gender,F_Contact_No],(error,rows,fields)=>{
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

//Deleting farmers details to farmers table in MYSQL
router.delete('/:farmers/:F_ID',(req,res)=>{
    const{F_ID}= req.params;
    mysqlConnection.query('delete from farmers where F_ID = ?;',[F_ID], (error,rows,fields)=>{
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