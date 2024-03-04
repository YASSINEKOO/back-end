import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/' , usersController.getAllUsers
    // (req, res) => {
    // res.json({ message: 'find all users'});
    // }
);

router.get('/:id', usersController.getUserById
//   (req, res) => {
//   res.send(req.params.bookId)

// }
);

router.post('/', usersController.createUser
//     (req, res) => {
//     const newUser = req.body;
//     res.send( newUser );

// }
);

router.delete('/search/:key', usersController.searchUsers
//   (req, res) => {
//   const { userId } = req.params;
//   res.send(`Delete record with id ${id}`);
// }
);

export default router;