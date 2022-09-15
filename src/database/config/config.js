require('dotenv').config({ path: __dirname+'/./../../../.env'});

module.exports = {
    development: {
        username: process.env.DATABASE_USER || "b9a7891991700c",
        password: process.env.PASSWORD || "92190dc9",
        database: process.env.DATABASE || "heroku_cf29b3a264c0669",
        host: process.env.HOST || "us-cdbr-east-06.cleardb.net",
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true
        },
        timezone: '-03:00'
    }
}