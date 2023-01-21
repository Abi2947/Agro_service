const { Router }= require ('express');
const router =Router();

const mysqlConnection = require('../database/db');

router.get('/',(req,res)=>{
    res.status(200).json('Server on port 8000 and database is connected');
});

router.get('/:machines',(req,res)=>{
    mysqlConnection.query('SELECT * FROM machines',(error,rows,fields)=>{
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

router.get('/:machines/:M_ID',(req,res)=>{
    const {M_ID}=req.params;
    mysqlConnection.query('SELECT * FROM machines where M_ID =?;', [M_ID],(error,rows,fields)=>{
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

//Inserting machines details to machines table in MYSQL
router.post('/:machines',(req,res)=>{
    const {M_ID,M_Name, M_Address,M_Owner,M_Model,M_O_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('insert into machines(M_ID, M_Name, M_Address, M_Owner, M_Model, M_O_Contact_No) values(?,?,?,?,?,?);',
    [M_ID, M_Name, M_Address, M_Owner, M_Model, M_O_Contact_No],(error,rows,fields)=>{
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

//Updating machines details to machines table in MYSQL
router.put('/:machines/:M_ID',(req,res)=>{
    const {M_ID, M_Name, M_Address, M_Owner, M_Model, M_O_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('update machines set M_Name = ?, M_Address = ?, M_Owner = ?, M_O_Contact_No = ?, M_Model = ?, where M_ID = ?;',
    [M_ID, M_Name, M_Address, M_Owner, M_Model, M_O_Contact_No],(error,rows,fields)=>{
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

//Deleting machines details to machines table in MYSQL
router.delete('/:machines/:M_ID',(req,res)=>{
    const{M_ID}= req.params;
    mysqlConnection.query('delete from machines where M_ID = ?;',[M_ID], (error,rows,fields)=>{
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