const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// User registration
app.post('/register', (req, res) => {
    const { username, email, password, address } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const query = 'INSERT INTO users (username, email, password, address) VALUES (?, ?, ?, ?)';
    db.query(query, [username, email, hashedPassword, address], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'User registered successfully' });
    });
});

// User login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) return res.status(500).send(err);

        if (results.length === 0) {
            return res.status(404).send({ message: 'User not found' });
        }

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '24h' });
        res.status(200).send({ message: 'Login successful', token });
    });
});

// Get user details
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.length === 0) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(result[0]);
    });
});

// Update user address
app.put('/user/:id/address', (req, res) => {
    const userId = req.params.id;
    const { address } = req.body;

    const query = 'UPDATE users SET address = ? WHERE id = ?';
    db.query(query, [address, userId], (err, result) => {
        if (err) return res.status(500).send(err);

        res.status(200).send({ message: 'Address updated successfully' });
    });
});

// Add a product
app.post('/products', (req, res) => {
    const { name, price, description } = req.body;

    const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
    db.query(query, [name, price, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: 'Product added successfully' });
    });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;

    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [productId], (err, result) => {
        if (err) return res.status(500).send(err);

        res.status(200).send({ message: 'Product deleted successfully' });
    });
});

// Payment confirmation
app.post('/payment', (req, res) => {
    const { userId, amount } = req.body;

    const query = 'INSERT INTO payments (user_id, amount) VALUES (?, ?)';
    db.query(query, [userId, amount], (err, result) => {
        if (err) return res.status(500).send(err);

        res.status(200).send({ message: 'Payment confirmed successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
