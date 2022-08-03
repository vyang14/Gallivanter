const router = require('express').Router();
// Include the Book model with the other imports
const { User, UserRequest,Completedtrip,Reviews } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const userreqData = await UserRequest.findAll();
    res.status(200).json(userreqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get('/:id', async (req, res) => {
  try {
    const userreqData = await UserRequest.findByPk(req.params.id, {
      // Add Book as a second model to JOIN with
      include: [{ model:UserRequest }, { model: User }],
    });

    if (!userreqData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userreqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post('/', async (req, res) => {
  try {
    const userreqData = await UserRequest.create(req.body);
    console.log(userreqData);
    res.status(200).json(userreqData);
  } catch (err) {
    res.status(400).json("yes?");
  }
});

// DELETE a reader
router.delete('/:id', async (req, res) => {
  try {
    const userreqData = await UserRequest.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userreqData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userreqData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
