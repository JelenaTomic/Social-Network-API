const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thought
router
    .route('/')
    .get(getAllThought);

// /api/thought/:id
router
    .route('/:id')
    .post(createThought)
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;