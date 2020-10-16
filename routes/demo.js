const router = require('express').Router();
const verify = require('./verifyToken');

// Create a dummy get route

router.get('/demo',verify, async (req, res) => {
    console.log(res);
})

module.exports = router;