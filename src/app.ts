import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors'
import indexRouter from './routes/index';
import userRouter from './routes/user.route'
import { errorHandler } from './errorHandler';
import { loggerMiddleware } from './config/logger';

const app = express();

app.use(express.json());
const corsOptions = {
    origin: 'http://frontend.greif.me'
}

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(loggerMiddleware)

app.use('/', indexRouter);
app.use('/user', userRouter)

app.use(errorHandler)

export default app;
