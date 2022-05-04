import * as express from 'express';
import * as cookieParser from 'cookie-parser';

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user.route');
const { errorHandler } = require('./errorHandler');
const { loggerMiddleware } = require('./config/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(loggerMiddleware)

app.use('/', indexRouter);
app.use('/user', userRouter)

app.use(errorHandler)

export default app;
