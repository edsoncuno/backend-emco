import config from '../../config';
import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import routers from './routes';
import errorHandle from './middlewares/error.middleware';

export class AppApiRest {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.set('port', config.SERVER_PORT);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());

        routers(this.app);

        this.app.use(errorHandle);
    }

    public async run() {
        this.app.listen(config.SERVER_PORT, () => {
            console.log(`Connected successfully to server on port: ${config.SERVER_PORT} - http://localhost:${config.SERVER_PORT}`);
        });
    }
}