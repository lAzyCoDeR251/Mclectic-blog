const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const generateToken = (adminId) => {
  return jwt.sign({ adminId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ name });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate and send token
    const token = generateToken(admin._id);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { login };
