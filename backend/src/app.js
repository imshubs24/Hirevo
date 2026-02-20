const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

/*
    Middlewares 
*/
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth', require("./routes/auth.routes"));

/**
 * -----------------------
 * Health Check Route
 * -----------------------
 * Used for:
 * - DevOps
 * - Docker health checks
 * - Load balancers
 * - CI/CD verification
 */
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hirevo API is running",
        timestamp: new Date().toISOString(),
    });
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hi, from Hirevo backend!" })
});

module.exports = app;