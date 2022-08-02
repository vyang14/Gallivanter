const router = require('express').Router();
// Include the Book model with the other imports
const { User, UserRequest,Completedtrip,Reviews } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const completedtripdata = await Completedtrip.findAll({
      include: [{ model: Completedtrip },{ model: UserRequest },{model: User}],
    });
    res.status(200).json(completedtripdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
router.get('/:id', async (req, res) => {
  try {
    const completedtripdata = await Completedtrip.findByPk(req.params.id, {
        include: [{ model: Completedtrip },{ model: UserRequest },{model: User}],
    });
    if (!completedtripdata) {
      res.status(404).json({ message: 'No Trip found with that id!' });
      return;
    }
    res.status(200).json(completedtripdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Completedtrip
router.post('/', async (req, res) => {
  try {
    const completedtripdata = await Completedtrip.create(req.body);
    res.status(200).json(completedtripdata);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Completedtrip
router.delete('/:id', async (req, res) => {
  try {
    const completedtripdata = await Completedtrip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!completedtripdata) {
      res.status(404).json({ message: 'No Completedtrip found with that id!' });
      return;
    }

    res.status(200).json(completedtripdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

