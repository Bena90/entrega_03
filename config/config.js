import dotenv from 'dotenv';
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers';


dotenv.config();

const connectionString =  process.env.MONGO_URL

const args = yargs (hideBin(process.argv))
    .default({
        port: 8080,
        mode: 'fork'
    })
    .argv

// Database:

export default {
    port: process.env.PORT || args.port,
    connectionString,
}