import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/' , productsController.getAllProducts
    // (req, res) => {
    // res.json({ message: 'find all users'});
    // }
);

router.get('/:id', productsController.getProduct
//   (req, res) => {
//   res.send(req.params.bookId)

// }
);

router.post('/', productsController.createProduct
//     (req, res) => {
//     const newUser = req.body;
//     res.send( newUser );

// }
);

router.delete('/search/:key', productsController.searchProduct
//   (req, res) => {
//   const { userId } = req.params;
//   res.send(`Delete record with id ${id}`);
// }
);

export default router;