const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('[Server] Client connected.');

  ws.on('message', function incoming(message) {
    console.log(`[Server] Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', function () {
    console.log('[Server] Client disconnected.');
  });
});

console.log('[Server] WebSocket server is listening on ws://localhost:3000');
