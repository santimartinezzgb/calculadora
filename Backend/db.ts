const { Pool } = require('pg');
import { PRIVATES } from "./private.env";

// Configuración de la base de datos
const pool = new Pool({
    user: PRIVATES.USER,
    host: 'localhost',
    database: PRIVATES.DB,
    password: PRIVATES.PASSWORD,
    port: 5432,
});

// Función para conectar y testear la base de datos
async function connectDB() {
    try {
        const cliente = await pool.connect();
        console.log('Conexión con la base de datos exitosa!');
        cliente.release(); // Release the client back to the pool
    } catch (err) {
        console.error('Error al conectar:', err);
    }
}

// Función para ejecutar una query
async function query(texto: string, parametros?: any[]) {
    try {
        const res = await pool.query(texto, parametros);
        return res.rows;
    } catch (err) {
        console.error('Query error:', err);
        throw err;
    }
}

export { pool, query, connectDB };


