const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors());

const db = require ('./models')

const uzytkownicy_router = require ('./routes/uzytkownik.js')
app.use("/uzytkownik", uzytkownicy_router);
const ogloszenia_router = require ('./routes/ogloszenia.js')
app.use("/ogloszenia", ogloszenia_router);
const login = require ('./routes/login.js')
app.use("/login", login);

// connection to database
db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("Server running on port 3001");
	})
})