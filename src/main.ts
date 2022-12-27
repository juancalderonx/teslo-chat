import './style.css'
import typescriptLogo from './common/typescript.svg'
import nestLogo from './common/nestjs-logo.svg'
import { connectToServer } from './socket-client';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://docs.nestjs.com//" target="_blank">
      <img src="${nestLogo}" class="logo vanilla" alt="NestJS logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>

    <h1>Chat Teslo-Shop</h1>

    <span id="serverStatus">Offline</span> <br>
    <p>For connect, please type your JWT</p>

    <input type="text" id="jwtToken" placeholder= "JSON WEB TOKEN"/>
    <button id="btn-connect">Connect</button>

    <br>

    <ul id="clients-ul">

    </ul>

    <form id="message-form">
      <input placeholder="Message" id="message-input"/>
    </form>

    <h3>Messages</h3>

    <ul id="messages-ul">

    </ul>

  </div>
`;

const jwtToken = document.querySelector<HTMLInputElement>('#jwtToken')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {

  if(jwtToken.value.trim().length <= 0) return alert('Enter a valid JWT token')

  connectToServer(jwtToken.value.trim());
});


