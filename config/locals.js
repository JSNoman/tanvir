let jwt = require('jsonwebtoken');

let login_user_name_send = ((req, res, next) => {
    let token = req.cookies.token;

    if (!token) {
        res.locals.login_user_name = null;
        return next();
    }

    jwt.verify(token, 'your_jwt_secret', async (error, decoded) => {
        if (error) {
            res.locals.login_user_name = null;
        } else {
            res.locals.login_user_name = decoded.username;
        }
    });
    next();
});

module.exports = login_user_name_send;