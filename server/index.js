const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const authRoutes = require('./routes/auth');
const queueRoutes = require('./routes/queue'); // courses === queue
const favoriteRoutes = require('./routes/favorites'); //orders === favorites

const csrf = require('csurf');
const keys = require('./keys');
const flash = require('connect-flash');
const userMiddleware = require('./middleware/user');
const varMiddleware = require('./middleware/variables');

const app = express();

const store = new MongoStore({
	uri: keys.MONGODB_URI,
	collection: 'sessions',
});

app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		store,
		resave: false,
		saveUninitialized: false,
		secret: keys.SESSION_SECRET,
	}),
);

app.use(csrf());
app.use(flash());
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/auth', authRoutes);
app.use('/queue', queueRoutes);
app.use('/favorite', favoriteRoutes);

const PORT = process.env.PORT || 2000;

async function start() {
	try {
		await mongoose.connect(keys.MONGODB_URI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});

		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
}

start();
