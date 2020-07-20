# MineSweeper

## MineSweeper Online
MineSweeper Online is multiplayer online game where you can challenge other player against you. Show them who is the best player and win the battle by discovering hidden mines on battlefield
 
## To start this project you need NODE environment
version 12.18+ https://nodejs.org/en/
database unknown for now

## How to run?

```bash
npm install
npm run dev
```

### Usage

- `npm run dev` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm start` - Just runs `node ./dist/server/server.js`
- `npm start:prod` - sets `NODE_ENV` to `production` and then runs `node ./dist/server/server.js`. (Bypassing webpack proxy)
