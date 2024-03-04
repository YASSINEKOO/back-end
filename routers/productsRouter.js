import express from 'express';
import productsController from '../controllers/productsController.js';

const productsRouter = express.Router();

productsRouter.get('/' , productsController.getAllProducts
    // (req, res) => {
    // res.json({ message: 'find all users'});
    // }
);

productsRouter.get('/:id', productsController.getProduct
//   (req, res) => {
//   res.send(req.params.bookId)
// }
);

productsRouter.post('/', productsController.createProduct
//     (req, res) => {
//     const newUser = req.body;
//     res.send( newUser );

// }
);

productsRouter.delete('/search/:key', productsController.searchProduct
//   (req, res) => {
//   const { userId } = req.params;
//   res.send(`Delete record with id ${id}`);
// }
);

export default productsRouter;