import './style.css';
import { App } from './App';
import { Vector2 } from './modules/Vector2';


const app = new App();

app.init(new Vector2(8, 8));
app.createSession();
app.start();


document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;
