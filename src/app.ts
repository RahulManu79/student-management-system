import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
dotenv.config()
import routes from './routes/index.routes'
import swaggerUi from 'swagger-ui-express';
import docs  from '../docs/index';

// import swaggerJsdoc from 'swagger-jsdoc';
import DB from './config/db'

const app = express();

app.use(express.json());
DB()

app.use('/api', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});