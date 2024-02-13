import express from 'express';

const router = express.Router();

router.get('/' , (req, res) => {
    res.json({ message: 'find all users'});
    
});

router.get('/:userId', (req, res) => {
  res.send(req.params.bookId)

});

router.post('/', (req, res) => {
    const newUser = req.body;
    res.send( newUser );

});

router.delete('/userId', (req, res) => {
  const { userId } = req.params;
  res.send(`Delete record with id ${id}`);
});

export default router;