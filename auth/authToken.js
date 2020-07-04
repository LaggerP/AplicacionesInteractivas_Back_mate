const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || require('../config/config').DEV_SECRET
const log = require('console-emoji')

module.exports = (req, res, next) => {
   let token = req.headers.authorization.split(' ')[1];
   jwt.verify(token, SECRET, (err) => {
      if (err) {
         log('no token provided...', 'err')
         res.status(500).json({ error: "Not Authorized" });
      } else {
         log('token provided... :star::star::star:', 'ok')
         next();
      }
   });
}