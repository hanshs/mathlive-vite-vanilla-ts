import { ComputeEngine } from "@cortex-js/compute-engine";
import * as Mathlive from "mathlive";
import text from "./text";

const ce = new ComputeEngine();
ce.latexOptions = { decimalMarker: "{,}" };

export default function (node: HTMLDivElement) {
  text(node, "h4", `Decimal separator option set to ","`);
  text(node, "p", `Type "1,5" or "25,5" and see console.log for output`);

  const mathfield = new Mathlive.MathfieldElement();

  const logOutput = (e: any) => {
    console.log(mathfield.getValue(), e.target.value, e.target.getValue(), e.currentTarget.value, e.currentTarget.getValue());
    console.log(`ce.parse("${mathfield.getValue()}").toJSON()`, ce.parse(mathfield.getValue()).toJSON());
    console.log("ce.latexOptions.decimalMarker:", ce.latexOptions.decimalMarker);
  };

  mathfield.addEventListener("input", logOutput);
  mathfield.addEventListener("change", logOutput);
  mathfield.addEventListener("keypress", logOutput);
  mathfield.addEventListener("keydown", logOutput);
  mathfield.addEventListener("keyup", logOutput);

  node.appendChild(mathfield);
}
