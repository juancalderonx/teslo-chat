import './style.css'
import typescriptLogo from './common/typescript.svg'
import nestLogo from './common/nestjs-logo.svg'
import { connectToServer } from './socket-client';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${nestLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Chat Teslo-Shop</h1>
    <span>Offline</span>
  </div>
`;

connectToServer();
