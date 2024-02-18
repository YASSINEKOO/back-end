import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/' , usersController.getAllusers
    // (req, res) => {
    // res.json({ message: 'find all users'});
    // }
);

router.get('/:id', usersController.getuser
//   (req, res) => {
//   res.send(req.params.bookId)

// }
);

router.post('/', usersController.createuser
//     (req, res) => {
//     const newUser = req.body;
//     res.send( newUser );

// }
);

router.delete('/search/:key', usersController.searchuser
//   (req, res) => {
//   const { userId } = req.params;
//   res.send(`Delete record with id ${id}`);
// }
);

export default router;