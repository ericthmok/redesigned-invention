const { User, Thought} = require('../models');

const userController = {
    getUsers(req,res){
        User.find({})
        .then((userData)=>res.json(userData))
        .catch(err=>{
            console.log(err);
            res.status(400).json(err);
        });
    },
    addUser(req,res){
        User.create(req.body)
        .then(userData=>res.json(userData))
        .catch(err=>res.status(400).json(err));
    },
    getUserById(req,res){
        User.findOne({_id: req.params.userId})
        .then(userData=>res.json(userData))
        .catch(err=>res.status(400).json(err));
    },
    updateUser(req,res){
        User.findOneAndUpdate({_id:req.params.userId},body,{new:true},{runValidators: true})
        .then(userData=>{
            if(!userData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    },
    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.userId})
        .then(userData=>{
            if(!userData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    },
    addFriend(req,res){
        User.findOneAndUpdate({_id:req.params.userId},{$push:{friends:req.params.friendId}},{new:true, runValidators:true})
        .then(userData=>{
            if(!userData){
                res.stauts(404).json({message:'Error'});
                return;
            }
        })
    },
    removeFriend(req, res){
        User.findOneAndUpdate({_id: req.params.userId},{$pull:{friends:req.params.friendId}},{new:true})
        .then(userData=>{
            if(!userData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    }
}

module.exports=userController;