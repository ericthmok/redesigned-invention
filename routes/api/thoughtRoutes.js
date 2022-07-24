const router = require ('express').Router();
const {getThoughts, getThoughtById,addThought,updateThought,deleteThought,addReaction,deleteReaction}=require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(addThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reations/:reactionId').delete(deleteReaction);

module.exports = router;