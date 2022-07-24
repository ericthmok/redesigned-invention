const { Thought, User} = require("../models");

const thoughtController = {
    getThoughts(req, res){
        Thought.find({})
        .then(userData=>res.json(userData))
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        });
    },
    getThoughtById(req,res){
        Thought.findOne({_id: req.params.thoughtId})
        .then(thoughtData=>res.json(thoughtData))
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        });
    },
    addThought(req, res){
        Thought.create(req.body)
        .then((thought)=>{
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thought: thought._id}},
                {new: true}
            );
        })
        .then(thoughtData=>{
            if(!thoughtData){
                res.status(404).json({message: 'Error'});
                return;
            }
        })
    },
    updateThought(req,res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, body, {runValidators: true, new: true})
        .then(thoughtData=>{
            if(!thoughtData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    },
    deleteThought(req, res){
        Thought.findByIdAndDelete({_id: req.params.thoughtId}, {runValidators: true, new:true})
        .then(thoughtData=>{
            if(!thoughtData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    },
    addReaction(req, res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$push:{reactions: body}}, {new: true})
        .then(thoughtData=>{
            if(!thoughtData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    },
    deleteReaction(req, res){
        Thought.findOneAndUpdate({_id: req.params.thoughtId},{$pull:{reactions:{reactionId: req.params.reactionId}}},{new: true})
        .then(thoughtData=>{
            if(!thoughtData){
                res.status(404).json({message:'Error'});
                return;
            }
        })
    }
}

module.exports=thoughtController;