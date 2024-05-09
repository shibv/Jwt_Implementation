import mysql from 'mysql';
import dotenv, { config } from 'dotenv';
config();
const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const Connection = () => {
    try {
        db.connect( );
        console.log('MySQL Connected...');
    } catch (error) {
        console.log(error);
    }
}

export { db, Connection };
