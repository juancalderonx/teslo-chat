import { Manager, Socket } from "socket.io-client"

export const connectToServer = (token: string) => {
  const manager = new Manager('http://localhost:3000/socket.io/socket.io.js', {
    extraHeaders: {
      hola: 'mundo',
      auth: token
    }
  });

  const socket = manager.socket('/');

  addListeners(socket);
}

const addListeners = ( socket: Socket ) => {

  const clientsUl = document.querySelector('#clients-ul')!;
  const messageForm = document.querySelector<HTMLFormElement>('#message-form');
  const messageInput = document.querySelector<HTMLInputElement>('#message-input');
  const messagesUl = document.querySelector('#messages-ul')!;
  const serverStatusLabel = document.querySelector('#serverStatus')!;

  socket.on('connect', () => {
    serverStatusLabel.innerHTML = 'Server running successfully.';
  });

  socket.on('disconnect', () => {
    serverStatusLabel.innerHTML = 'Server disconnected';
  });

  socket.on('clients-updated', (clients: string[]) => {
    let html = ``;
    clients.forEach( clientId => {
      html += `
      <li>${clientId}</li>
      `;
    })

    clientsUl.innerHTML = html;
  });

  messageForm!.addEventListener('submit',(event) => {
    event.preventDefault();

    if(messageInput!.value.trim().length <= 0) return;

    socket.emit('message-from-client', {
      id: 'Me',
      message: messageInput!.value
    });

    messageInput!.value = "";

  });

  socket.on('message-from-server', ( payload: { fullname: string, message: string } ) => {
    const newMessage = `
      <li>
        <strong>${payload.fullname}</strong>
        <span>${payload.message}</span>
      </li>
    `;

    const li = document.createElement('li');
    li.innerHTML = newMessage;

    messagesUl.append(li);
  })

}