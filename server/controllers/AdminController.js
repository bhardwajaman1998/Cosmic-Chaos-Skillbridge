const Admin = require('../models/Admin');

// Signup endpoint
exports.signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Create a new admin document
    const admin = new Admin({ email, password, username});

    // Save the admin to the database
    const savedAdmin = await admin.save();

    res.status(201).json({ message: 'Admin signed up successfully', admin: savedAdmin });
  } catch (error) {
    console.error('Error signing up admin:', error);
    res.status(500).json({ message: 'An error occurred while signing up admin' });
  }
};

// Login endpoint
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Compare the provided password with the stored password
    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Admin logged in successfully', admin });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'An error occurred while logging in admin' });
  }
};