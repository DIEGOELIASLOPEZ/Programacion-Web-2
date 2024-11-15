const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express(); // Define 'app' antes de usarla

app.use(express.static('public')); // Configuración de archivos estáticos
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3312',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

const port = 3009;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});
// Ruta para mostrar la página "enviado"
app.get('/enviado', (req, res) => {
    res.render('enviado'); // Renderiza enviado.ejs
});

// Ruta para mostrar la página "editado"
app.get('/editado', (req, res) => {
    res.render('editado'); // Renderiza editado.ejs
});

// Ruta para la lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Ruta para agregar usuarios
app.post('/add', (req, res) => {
    const { name, account_number, career, email } = req.body;
    const query = 'INSERT INTO users (name, account_number, career, email) VALUES (?, ?, ?, ?)';
    db.query(query, [name, account_number, career, email], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('enviado');
        }
    });
});

// Ruta para mostrar formulario de edición de usuario
app.get('/edit/:account_number', (req, res) => {
    const { account_number } = req.params;
    const query = 'SELECT * FROM users WHERE account_number = ?';
    db.query(query, [account_number], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else if (results.length === 0) {
            res.send('No se encontró un usuario con ese número de cuenta');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Ruta para actualizar usuario (método POST)
app.post('/edit/:account_number', (req, res) => {
    const { account_number } = req.params;
    const { name, email, career } = req.body;
    const query = 'UPDATE users SET name = ?, email = ?, career = ? WHERE account_number = ?';

    db.query(query, [name, email, career, account_number], (err) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Error');
        } else {
            res.redirect('/editado'); // Redirige a la página de confirmación de edición
        }
    });
});


// Ruta para mostrar la tabla en una página separada
app.get('/table', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('table', { users: results });
        }
    });
});

// Ruta para eliminar usuario usando account_number
app.get('/delete/:account_number', (req, res) => {
    const { account_number } = req.params; // Usar account_number como referencia
    const query = 'DELETE FROM users WHERE account_number = ?';
    db.query(query, [account_number], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/table'); // Redirigir a la tabla después de eliminar
        }
    });
});

