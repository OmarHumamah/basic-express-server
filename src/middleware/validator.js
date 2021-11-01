'use strict';

module.exports =  (req, res, next)=>{
    let name = req.query.name;
    if(name){
        res.status(200).send(
            {'name': name}
        )
    }else{
        throw new Error('that is a bad path ERROR')
    }
}