import connection from '../db/connection.js';
 
// Get all contact form submissions
export const getContactSubmissions = async (req, res) => {
    try {
        const conn = await connection;
        const [results] = await conn.execute('SELECT * FROM Contact ORDER BY created_at DESC');
        res.json({ success: true, data: results });
    } catch (err) {
        console.error('Error fetching contact submissions:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

 
// Get all course form submissions
export const getCourseSubmissions = async (req, res) => {
    try {
        const conn = await connection;
        const [results] = await conn.execute('SELECT * FROM Course ORDER BY created_at DESC');
        res.json({ success: true, data: results });
    } catch (err) {
        console.error('Error fetching course submissions:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};


// Get all booktrail form submissions
export const getBookTrailSubmissions = async (req, res) => {
    try {
        const conn = await connection;
        const [results] = await conn.execute('SELECT * FROM BookTrail ORDER BY created_at DESC');
        res.json({ success: true, data: results });
    } catch (err) {
        console.error('Error fetching booktrail submissions:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

 
// Create contact form submission
export const createContactSubmission = async (req, res) => {
    try {
        const { name, phone, course, form_source } = req.body;
        const conn = await connection;
        
        const [result] = await conn.execute(
            'INSERT INTO Contact (name, phone, course, form_source) VALUES (?, ?, ?, ?)',
            [name, phone, course, form_source || 'Contact Form']
        );
        
        res.json({ success: true, message: 'Contact submission created successfully', id: result.insertId });
    } catch (err) {
        console.error('Error creating contact submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

 
// Create course form submission
export const createCourseSubmission = async (req, res) => {
    try {
        const { name, phone, course, form_source } = req.body;
        const conn = await connection;
        
        const [result] = await conn.execute(
            'INSERT INTO Course (name, phone, course, form_source) VALUES (?, ?, ?, ?)',
            [name, phone, course, form_source || 'Course Form']
        );
        
        res.json({ success: true, message: 'Course submission created successfully', id: result.insertId });
    } catch (err) {
        console.error('Error creating course submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
 
// Create booktrail form submission
export const createBookTrailSubmission = async (req, res) => {
    try {
        const { name, phone, course, form_source } = req.body;
        const conn = await connection;
        
        const [result] = await conn.execute(
            'INSERT INTO BookTrail (name, phone, course, form_source) VALUES (?, ?, ?, ?)',
            [name, phone, course, form_source || 'BookTrail Form']
        );
        
        res.json({ success: true, message: 'BookTrail submission created successfully', id: result.insertId });
    } catch (err) {
        console.error('Error creating booktrail submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};

// Delete contact submission
export const deleteContactSubmission = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await connection;
        
        const [result] = await conn.execute('DELETE FROM Contact WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Contact submission not found' });
        }
        
        res.json({ success: true, message: 'Contact submission deleted successfully' });
    } catch (err) {
        console.error('Error deleting contact submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
 
// Delete course submission
export const deleteCourseSubmission = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await connection;
        
        const [result] = await conn.execute('DELETE FROM Course WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Course submission not found' });
        }
        
        res.json({ success: true, message: 'Course submission deleted successfully' });
    } catch (err) {
        console.error('Error deleting course submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};
 
// Delete booktrail submission
export const deleteBookTrailSubmission = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await connection;
        
        const [result] = await conn.execute('DELETE FROM BookTrail WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'BookTrail submission not found' });
        }
        
        res.json({ success: true, message: 'BookTrail submission deleted successfully' });
    } catch (err) {
        console.error('Error deleting booktrail submission:', err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
};