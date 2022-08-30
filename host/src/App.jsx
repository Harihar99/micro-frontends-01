import { render } from "solid-js/web";

import "./index.scss";
/* Here we are importing Counter component from remote microfrontend app*/
import Counter from "remote/Counter";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <br />
    <br />
    <div>Content from remote frontend</div>
    <br />
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
