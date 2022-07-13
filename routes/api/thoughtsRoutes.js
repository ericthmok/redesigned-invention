const router = require ('express').Router();
const {getThought, getThoughtById,addThought,updateThough,deleteThough,addReaction,deleteReaction}=require('../../controllers/thoughtController');

router.route('/').get(getThought).post(addThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThough).delete(deleteThough);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reations/:reactionId').delete(deleteReaction);

module.exports = router;