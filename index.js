const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/testi', require('./routes/testi'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port", PORT));