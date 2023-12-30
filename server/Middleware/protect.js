// const authenticateToken = async (req, res, next) => {
//     try {
//       const authHeader = req.headers['authorization'];
//       if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(403).send('Invalid token');
//       }

//       const token = authHeader.split(' ')[1];
//       console.log('Token in authenticateToken:', token);

//       const decode = await jwt.verify(token, process.env.JWT_SECRET);
//       console.log('Decoded Data in authenticateToken:', decode);

//       req.user = decode;
//       console.log('User in authenticateToken:', req.user);
//       next();
//     } catch (err) {
//       res.status(403).send('Invalid token');
//     }
//   };

//   module.exports = authenticateToken;











const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).send('Invalid token');
    }

    const token = authHeader.split(' ')[1];
    console.log('Token in authenticateToken:', token);

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Data in authenticateToken:', decode);

    req.user = decode;
    console.log('User in authenticateToken:', req.user);
    next();
  } catch (err) {
    console.error(err);
    res.status(403).send('Invalid token');
  }
};

module.exports = authenticateToken;
