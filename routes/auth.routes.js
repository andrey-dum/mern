const {Router} = require('express')
const router = Router()

// /api/auth/register
router.post('/register', async (req, res) => {
    try {

        const {email, password} = req.body

    } catch (error) {
        res.status(500).json({message: 'что-то пошло не так. Попробуйте снова.'})
    }
})
// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router