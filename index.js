import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/config.js';
import { fileURLToPath } from 'url';
import path from 'path';
import compression from 'compression';
import routes from './routes/index.routers.js'
import logger from './loggers/logger.js';

dotenv.config()

const app = express();
const port = config.port || 8000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// middlewares
app.use(cors())
app.use (express.static(path.join(__dirname, "public")))
app.use (express.urlencoded({ extended: true }));
app.use (express.json());
app.use (compression())

// Routes
app.use("/api", routes);

// Connect DB



//Logger * routes
app.use((req, res, next)=>{
    logger.info(`New request: ${req.method} - ${req.path}`)
    next()
})

//Logger 404 routes
app.get("*", (req, res) => {
    const { url, method } = req;
    logger.warn(`Ruta ${method} ${url} no implementada`);
    res.status(404).json({error404: `Ruta ${method} ${url} no está implementada`});
  });

//Logger error
app.use(function (err, req, res, next) {
    logger.error("Error: ", err)
    res.status(500).json({
        error: err.message,
        });
    });

// Connection
app.listen(port, (err)=>{
    if (!err){
        console.log(`Server run on port ${port}`)
    }else{
        console.log(`Something went wrong: ${err}`)
    }
})