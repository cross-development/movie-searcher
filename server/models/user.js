const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	name: String,

	email: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	movies: {
		favorites: [
			{
				movieId: {
					type: Number,
					required: true,
				},

				poster_path: {
					type: String,
					required: true,
				},

				title: {
					type: String,
					required: false,
				},

				name: {
					type: String,
					required: false,
				},

				release_date: {
					type: String,
					required: true,
				},

				vote_average: {
					type: Number,
					required: true,
				},

				overview: {
					type: String,
					required: true,
				},

				genres: [
					{
						id: {
							type: Number,
							required: true,
						},
						name: {
							type: String,
							required: true,
						},
					},
				],

				favoritesId: {
					type: Schema.Types.ObjectId,
					ref: 'Favorites',
					required: true,
				},
			},
		],

		queue: [
			{
				movieId: {
					type: Number,
					required: true,
				},

				poster_path: {
					type: String,
					required: true,
				},

				title: {
					type: String,
					required: false,
				},

				name: {
					type: String,
					required: false,
				},

				release_date: {
					type: String,
					required: true,
				},

				vote_average: {
					type: Number,
					required: true,
				},

				overview: {
					type: String,
					required: true,
				},

				genres: [
					{
						id: {
							type: Number,
							required: true,
						},
						name: {
							type: String,
							required: true,
						},
					},
				],

				favoritesId: {
					type: Schema.Types.ObjectId,
					ref: 'Favorites',
					required: true,
				},
			},
		],
	},
});

userSchema.methods.addToCart = function (course) {
	const items = [...this.cart.items];
	const idx = items.findIndex(c => {
		return c.courseId.toString() === course._id.toString();
	});

	if (idx >= 0) {
		items[idx].count = items[idx].count + 1;
	} else {
		items.push({
			courseId: course._id,
			count: 1,
		});
	}

	this.cart = { items };
	return this.save();
};

userSchema.methods.removeFromCart = function (id) {
	let items = [...this.cart.items];
	const idx = items.findIndex(c => c.courseId.toString() === id.toString());

	if (items[idx].count === 1) {
		items = items.filter(c => c.courseId.toString() !== id.toString());
	} else {
		items[idx].count--;
	}

	this.cart = { items };
	return this.save();
};

userSchema.methods.clearCart = function () {
	this.cart = { items: [] };
	return this.save();
};

module.exports = model('User', userSchema);
