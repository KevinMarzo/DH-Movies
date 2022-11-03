module.exports = (sequelize, dataTypes) => {
	let alias = "Actores";
	let cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: dataTypes.DECIMAL,
			allowNull: false,
		},
		favorite_movie_id: {
			type: dataTypes.INTEGER,
		},
		updated_at: {
			type: dataTypes.DATE,
		},
		created_at: {
			type: dataTypes.DATE,
		},
	};

	let config = {
		tableName: "actors",
		timestamps: false,
		paranoid: true,
		id: "id",
		created_at: "created_at",
		updated_at: "updated_at",
		first_name: "first_name",
		rating: "rating",
		favorite_movie_id: "favorite_movie_id",
	};

	const Actor = sequelize.define(alias, cols, config);

	Actor.associate = function (models) {
		Actor.belongsToMany(models.Peliculas, {
			as: "pelicula",
			through: "actor_movie",
			foreignKey: "actor_id",
			otherKey: "movie_id",
			timestamps: false,
		});
	};

	return Actor;
};
