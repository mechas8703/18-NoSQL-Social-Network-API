const router = require('express').Router();

const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// Add `/users` to created routes
router.use('/user', usersRoutes);
router.use('/thought', thoughtsRoutes);

// Export Module Router
module.exports = router;