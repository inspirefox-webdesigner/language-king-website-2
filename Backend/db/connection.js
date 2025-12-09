import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'language_king',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default db