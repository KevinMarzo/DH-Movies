module.exports = (sequelize, dataTypes) => {
	let alias = "Generos";
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		ranking: {
			type: dataTypes.INTEGER,
			allowNull: false,
		},
		active: {
			type: dataTypes.INTEGER,
			allowNull: false,
		},
		updated_at: {
			type: dataTypes.DATE,
		},
		created_at: {
			type: dataTypes.DATE,
		},
	};

	let config = {
		tableName: "genres",
		timestamps: false,
		paranoid: true,
		id: "id",
		created_at: "created_at",
		updated_at: "updated_at",
		name: "name",
		ranking: "ranking",
		active: "active",
	};

	const Generos = sequelize.define(alias, cols, config);
	Generos.associate = function (models) {
		Generos.hasMany(models.Peliculas, {
			as: "pelicula",
			foreignKey: "genre_id",
		});
	};

	return Generos;
};
