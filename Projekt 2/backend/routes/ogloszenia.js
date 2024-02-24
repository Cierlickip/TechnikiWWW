const express = require ('express')
const router = express.Router ()
const { ogloszenia: ogloszenia } = require ('../models')
const { validateToken } = require('../middlewares/AuthMiddleware.js')

router.get('/get', validateToken, async (req, res) => {
	
	const ogloszenia_res = await ogloszenia.findAll ({
		where: {
			status: 'wystawione'
		}
	});
	
	res.json(ogloszenia_res)
})

router.post('/new', async (req, res) => {
	const ogloszenie_data = req.body
	
	ogloszenie_data.status = 'wystawione'
	
	await ogloszenia.create(ogloszenie_data)
	
	res.json({
		message: 'Otrzymano ogłoszenie'
	})
})

module.exports = router