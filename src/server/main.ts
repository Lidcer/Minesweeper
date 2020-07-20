import express from 'express';
import { listen } from 'socket.io';
import path from 'path';
import { apiRouter } from './routes/api-router';
import { pagesRouter } from './routes/pages-router';
import { staticsRouter } from './routes/statics-router';
import * as config from './config';
import { WebSocket } from './websocket/SocketHandler';

console.info(`*******************************************`);
console.info(`NODE_ENV: ${process.env.NODE_ENV}`);
console.info(`config: ${JSON.stringify(config, null, 2)}`);
console.info(`*******************************************`);

const app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

const http = app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});
const io = listen(http);
export const websocket = new WebSocket(io);


async function start() {
  try {
    // some script to start server
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  console.info('Ready');
}
start();

process.on('uncaughtException', uncaughtException => {
  console.error('uncaughtException', uncaughtException);
});

process.on('unhandledRejection', unhandledRejection => {
  console.error('unhandledRejection', unhandledRejection);
});
