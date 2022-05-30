const express = require('express');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT ?? 4000;

const registrationRouter = require('./routes/authorizationRoutes/registration.route');
const loginRouter = require('./routes/authorizationRoutes/login.route');
const logoutRouter = require('./routes/authorizationRoutes/logout.route');
const sessionRouter = require('./routes/authorizationRoutes/check.session.route');
const updateProfileRouter = require('./routes/updateRoutes/update.profile.route')

config(app);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.use('/', sessionRouter);
app.use('/support', require('./routes/support.routes'));

app.use('/getsession', sessionRouter);
app.use('/updateProfile', updateProfileRouter)


app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
