const express = require("express")
const router = express.Router();
const fs = require('fs');
const countryRoutes = require('./country.js')

router.use(countryRoutes)
module.exports = router;