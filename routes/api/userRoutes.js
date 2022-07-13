const router = require ('express').Router();
const {getUser, getUserById,createUser,updateUser,deleteUser,addFriend,removeFriend}=require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;