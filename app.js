const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // ✅ Load .env early
const connectDB = require('./DataBase/Db');

const app = express();
connectDB();

const allowedOrigins = [
    'https://portfolio-seven-sage-aqrc3m5b8m.vercel.app',
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
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
