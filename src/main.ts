import { destructuringObjects } from "./esnext/destructuringObjects";
import { letVarTS } from "./esnext/letVar";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TS + ESNEXT</h1>
  </div>
`;

letVarTS();
destructuringObjects();
