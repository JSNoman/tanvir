


let jwt = require('jsonwebtoken');

let verifyToken_And_Protected_Routed = async (req, res, next) => {

    let token = req.cookies.token;

    if (!token) {
        return res.redirect('/login');
    }

    jwt.verify(token, 'your_jwt_secret', async (error, decoded) => {
        if (error) throw error;
        
        req.decoded = decoded;
        console.log(decoded) // bar
        next();
    });
}

module.exports = verifyToken_And_Protected_Routed;