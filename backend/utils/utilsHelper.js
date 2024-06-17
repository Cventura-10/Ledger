const generateToken = (payload, expiresIn = '1d') => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
  };
  
  module.exports = { generateToken };
  