const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.PORT || 3306,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
)