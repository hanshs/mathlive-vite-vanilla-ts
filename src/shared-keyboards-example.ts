import * as Mathlive from "mathlive";
import text from "./text";

export default function (node: HTMLDivElement) {
  text(node, "h4", "Shared keyboard example");

  // Mathlive.MathfieldElement.ma

  const mathfields = [
    new Mathlive.MathfieldElement(),
    new Mathlive.MathfieldElement(),
    new Mathlive.MathfieldElement(),
  ];

  mathfields.forEach((f) => {
    // f.mathVirtualKeyboardPolicy = 'auto'
    node.appendChild(f);
  });
}
