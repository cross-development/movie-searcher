const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const authRoutes = require('./routes/auth');
const queueRoutes = require('./routes/orders');
const favoriteRoutes = require('./routes/courses');

const csrf = require('csurf');
const keys = require('./keys');
const flash = require('connect-flash');
const userMiddleware = require('./middleware/user');
const varMiddleware = require('./middleware/variables');

const app = express();

const store = new MongoStore({
	collection: 'sessions',
	uri: keys.MONGODB_URI,
});

app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: keys.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store,
	}),
);

app.use(csrf());
app.use(flash());
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/favorite', favoriteRoutes);
app.use('/queue', queueRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 2000;

async function start() {
	try {
		await mongoose.connect(keys.MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		});

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

start();
