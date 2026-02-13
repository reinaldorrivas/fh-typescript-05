import { destructuringArrays } from "./esnext/destructuringArrays";
import { destructuringObjects } from "./esnext/destructuringObjects";
import { forOf } from "./esnext/forof";
import { javascriptClass } from "./esnext/javascriptClass";
import { letVarTS } from "./esnext/letVar";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TS + ESNEXT</h1>
  </div>
`;

letVarTS();
destructuringObjects();
destructuringArrays();
forOf();
javascriptClass();
