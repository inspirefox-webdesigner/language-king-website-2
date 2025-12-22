import db from '../db/connection.js';

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const [rows] = await db.query(
      'SELECT * FROM admin_auth WHERE email = ? AND password = ?',
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect password or email' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


// Get current credentials
export const getCredentials = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT email, password FROM admin_auth LIMIT 1');
    
    if (rows.length > 0) {
      res.json({ success: true, data: rows[0] });
    } else {
      res.status(404).json({ success: false, message: 'No credentials found' });
    }
  } catch (error) {
    console.error('Get credentials error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update email
export const updateEmail = async (req, res) => {
  try {
    const { currentEmail, newEmail } = req.body;
    
    const [rows] = await db.query('SELECT * FROM admin_auth WHERE email = ?', [currentEmail]);
    
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Current email is incorrect' });
    }

    await db.query('UPDATE admin_auth SET email = ? WHERE email = ?', [newEmail, currentEmail]);
    
    res.json({ success: true, message: 'Email updated successfully' });
  } catch (error) {
    console.error('Update email error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


// Update password
export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const [rows] = await db.query('SELECT * FROM admin_auth WHERE password = ?', [currentPassword]);
    
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Current password is incorrect' });
    }

    await db.query('UPDATE admin_auth SET password = ? WHERE password = ?', [newPassword, currentPassword]);
    
    res.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Update password error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

