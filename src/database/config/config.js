require('dotenv').config({ path: __dirname+'/./../../../.env'});

module.exports = {
    development: {
        username: process.env.DATABASE_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true
        },
        timezone: '-03:00'
    }
}