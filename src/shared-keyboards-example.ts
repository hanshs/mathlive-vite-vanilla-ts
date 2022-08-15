import * as Mathlive from "mathlive";

const options: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: "none",
  keypressSound: "none",
  virtualKeyboardMode: "onfocus",
};

export default function (node: HTMLDivElement) {
  Mathlive.makeSharedVirtualKeyboard({});

  const mathfields = [
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
    new Mathlive.MathfieldElement(options),
  ];

  mathfields.forEach((f) => node.appendChild(f));
}
