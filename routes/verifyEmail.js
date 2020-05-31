var router = require("express").Router();
var User = require("../models/User");

router.post("/", function(req, res) {
    const {email} = req.body;
    console.log(req.body);
    User.findOne({email})
    .then(user =>{
        console.log(user);
        if(user){
            res.send({status:true,err:'Already Registered'})
        }else{
            res.send({status:false,err:''})
        }
    })
    .catch(err => {
        console.log('err occured');
    })
});

module.exports = router;
