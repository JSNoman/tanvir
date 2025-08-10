let express = require('express');
let app = express();
let path = require('path');
let flash = require('connect-flash');
let login_user_name_send = require('./config/locals');

let indexRouter = require('./router/index');
let shop_Now_Router = require('./router/shop_now');
let adminRouter = require('./router/admin');

// View Engine Setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

// app.use(flash());
// app.use((req, res, next) => {
//     res.locals.errorMessage = req.flash('errorMessage');
//     res.locals.successMessage = req.flash('successMessage');
//     next();
// });

app.use(login_user_name_send);
// parse application/json
app.use(express.json());

app.use('/', indexRouter);
app.use('/shop_now', shop_Now_Router);
app.use('/admin', adminRouter);
// app.use((req, res, next) => {
//     res.status(404).render('error/error', { message: 'Sorry, the page you are looking for does not exist.' });
// });

app.listen(3000, () => {
    console.log('Server is Running Port 3000');
});