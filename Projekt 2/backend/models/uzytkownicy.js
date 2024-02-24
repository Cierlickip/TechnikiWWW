module.exports = (sequelize, DataTypes) => {
	
	const uzytkownicy = sequelize.define("uzytkownicy", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		surname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		haslo_hash: {
			type: DataTypes.STRING(60),
			allowNull: false,
		}
	},
	{
		tableName: 'uzytkownicy',
		timestamps: false
	})
	
	uzytkownicy.associate = (models) => {
		uzytkownicy.hasMany(models.ogloszenia, {
			foreignKey: 'number_id'
		})
	}
	
	return uzytkownicy
}