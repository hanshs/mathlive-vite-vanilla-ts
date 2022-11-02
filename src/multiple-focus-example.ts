import * as Mathlive from "mathlive";
import text from "./text";

const options: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: "none",
  keypressSound: "none",
  virtualKeyboardMode: "onfocus",
};

export default function (node: HTMLDivElement) {
  text(node, "p", `Focus the mathfields one-by-one in a touch-enabled environment, notice how multiple fields get focus`);
  text(node, "small", `It doesn't happen, when focusing on the padding part of mathfield`);

  const mathfields = [
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
  ];

  mathfields.forEach((f) => {
    f.classList.add("mathfield--big-padding");
    node.appendChild(f);
  });
}
