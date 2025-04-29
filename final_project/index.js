const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

// Set up session middleware
app.use(session({
  secret: "fingerprint_customer",
  resave: true,
  saveUninitialized: true
}));

// Use routes
app.use("/customer", customer_routes);
app.use("/", genl_routes);

const PORT = 6000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
