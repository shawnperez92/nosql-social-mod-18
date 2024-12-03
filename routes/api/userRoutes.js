const router = require('express').Router();

const{
    createUser,
    getSingleUser,
    updateUser,
    getAllUsers,
    addFriend,
    deleteFriend,
    getSingleUser
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;