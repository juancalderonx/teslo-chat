import { Manager, Socket } from "socket.io-client"

export const connectToServer = () => {
  const manager = new Manager('http://localhost:3000/socket.io/socket.io.js');

  const socket = manager.socket('/');

  addListeners(socket);
}

const addListeners = ( socket: Socket ) => {
  const serverStatusLabel = document.querySelector('#serverStatus')!;

  socket.on('connect', () => {
    serverStatusLabel.innerHTML = 'Connected to server';
  });

  socket.on('disconnect', () => {
    serverStatusLabel.innerHTML = 'Disconnected to server';
  });

}