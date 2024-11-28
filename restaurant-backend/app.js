const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

// Menu data (In real-world apps, this would come from a database)
const menu = [
    { id: 1, name: 'Chilli Chicken', price: 130 },
    { id: 2, name: 'Paneer Butter Masala', price: 140 },
    { id: 3, name: 'Dal Makhani', price: 90 },
    { id: 4, name: 'Fried Noodles', price: 60 },
    { id: 5, name: 'Masala Dosa', price: 65 },
    { id: 6, name: 'Idli', price: 45 },
    { id: 7, name: 'Indian Breads', price: 12 },
    { id: 8, name: 'Coffee', price: 10 },
    { id: 9, name: 'Chai', price: 10 },
    { id: 10, name: 'Butter Chicken', price: 150 },
    { id: 11, name: 'Poori Sabzi', price: 40 },
    { id: 12, name: 'Aloo Parantha', price: 50 },
];

// Serve menu items when requested
app.get('/menu', (req, res) => {
    res.json(menu);
});

// Handle checkout request
app.post('/checkout', (req, res) => {
    const cart = req.body;  // Cart sent from the frontend
    let totalAmount = 0;

    cart.forEach(item => {
        const menuItem = menu.find(menuItem => menuItem.id === item.id);
        if (menuItem) {
            totalAmount += menuItem.price * item.quantity;
        }
    });

    // Simulate a checkout success (you can save this to a database in real-world applications)
    res.json({ message: 'Checkout successful', totalAmount });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
