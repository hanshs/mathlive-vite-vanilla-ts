import * as Mathlive from "mathlive";
import text from "./text";

const options: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: "none",
  keypressSound: "none",
  virtualKeyboardMode: "onfocus",
};

export default function (node: HTMLDivElement) {
  text(node, "h4", "Shared keyboard example");

  Mathlive.makeSharedVirtualKeyboard({});

  const mathfields = [
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
  ];

  mathfields.forEach((f) => node.appendChild(f));
}
