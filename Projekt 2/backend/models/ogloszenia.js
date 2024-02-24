module.exports = (sequelize, DataTypes) => {

	const ogloszenia = sequelize.define("ogloszenia", {
		opis: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		rasa_psa: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		miasto: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ulica: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		numer_domu: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		numer_tel: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		oplata: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		status: {
			type: DataTypes.ENUM('wystawione', 'w realizacji', 'wykonane', 'canceled'),
			allowNull: false,
		}
	},
	{
		tableName: 'ogloszenia',
		timestamps: false
	})

	ogloszenia.associate = (models) => {
		ogloszenia.belongsTo(models.uzytkownicy, {
			foreignKey: 'number_id',
			as: 'uzytkownik'
		})
	}

	return ogloszenia
}