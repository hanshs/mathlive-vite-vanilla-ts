import * as Mathlive from "mathlive";

const options: Partial<Mathlive.MathfieldOptions> = {
  decimalSeparator: ",",
  plonkSound: "none",
  keypressSound: "none",
  virtualKeyboardMode: "manual",
};

export default function (node: HTMLDivElement) {
  const mathfield = new Mathlive.MathfieldElement(options);

  mathfield.addEventListener("input", (e: any) => {
    console.log(
      mathfield.getValue(),
      e.target.value,
      e.target.getValue(),
      e.currentTarget.value,
      e.currentTarget.getValue()
    );
  });

  node.appendChild(mathfield);
}
