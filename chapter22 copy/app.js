const express = require('express');
const app = express();
const { dataSource } = require('./connect');
const port = 3000;

require('dotenv').config();


app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const cors = require('cors');
app.use(cors({ origin: '*' }));

// Initialize data source
dataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

// Routes
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');

app.use('/', express.static('files'));
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument.options)
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
