const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    const code = req.query.code
    console.log(code)
})


module.exports = router