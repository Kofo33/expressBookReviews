const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js"); // You can keep this if you still want to use a local database as a fallback
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Fetch list of books using Axios and async/await
public_users.get('/', async function (req, res) {
  try {
    // Replace this with the actual API endpoint or data source where books are stored
    const response = await axios.get('http://localhost:6000/books'); // Modify URL accordingly

    // If successful, send the books as a response
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books", error: error.message });
  }
});

module.exports.general = public_users;
