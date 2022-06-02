const express = require('express')

const router = express.Router()

router.get('/soma-por-dois', (req, res) => {
    res.json({resultado: 2 + 2})
})
router.get('/soma/:primeiro/:segundo', (req, res) => {
    const {primeiro, segundo} = req.params
    res.json({resultado: parseInt(primeiro) + parseInt(segundo)})
});

router.get('/multi/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) * parseInt(segundo)})
});

router.get('/dividir/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) / parseInt(segundo)})
});

router.get('/sub/:primeiro/:segundo', (req, res) => {
    const { primeiro, segundo } = req.params;
    res.json({resultado: parseInt(primeiro) - parseInt(segundo)})
});

module.exports = router