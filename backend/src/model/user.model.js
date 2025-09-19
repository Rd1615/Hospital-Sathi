const dbPromise = require('../lib/db.js');

const userModel = {
    createTableUsers: async () => {
        const db = await dbPromise;
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            
            )`)
    }
}

module.exports = userModel;