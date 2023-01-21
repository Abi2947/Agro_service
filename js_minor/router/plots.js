const { Router }= require ('express');
const router =Router();

const mysqlConnection = require('../database/db');

router.get('/',(req,res)=>{
    res.status(200).json('Server on port 8000 and database is connected');
});

router.get('/:plots',(req,res)=>{
    mysqlConnection.query('SELECT * FROM plots',(error,rows,fields)=>{
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

router.get('/:plots/:P_ID',(req,res)=>{
    const {P_ID}=req.params;
    mysqlConnection.query('SELECT * FROM plots where P_ID =?;', [P_ID],(error,rows,fields)=>{
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

//Inserting plots details to plots table in MYSQL
router.post('/:plots',(req,res)=>{
    const {P_ID, P_Address, P_Type, P_Owner, P_O_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('insert into plots(P_ID, P_Address, P_Type, P_Owner, P_O_Contact_No) values(?,?,?,?,?);',
    [P_ID, P_Address, P_Type, P_Owner, P_O_Contact_No],(error,rows,fields)=>{
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

//Updating plots details to plots table in MYSQL
router.put('/:plots/:P_ID',(req,res)=>{
    const {P_ID, P_Address, P_Type, P_Owner, P_O_Contact_No}= req.body;
    console.log(req.body);
    mysqlConnection.query('update plots set P_Owner = ?, P_Address = ?, P_Type = ?, P_O_Contact_No = ?, where P_ID = ?;',
    [P_ID, P_Address, P_Type, P_Owner, P_O_Contact_No],(error,rows,fields)=>{
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

//Deleting plots details to plots table in MYSQL
router.delete('/:plots/:P_ID',(req,res)=>{
    const{P_ID}= req.params;
    mysqlConnection.query('delete from plots where P_ID = ?;',[P_ID], (error,rows,fields)=>{
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