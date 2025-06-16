const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // ✅ Load .env early
const connectDB = require('./DataBase/Db');

const app = express();
connectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', require('./Router/userRouter'));

app.get('/', (req, res) => {
    res.send("API Working on Your Local Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
