import "./style.css";
import * as Mathlive from 'mathlive';
// import decimalSeparatorExample from "./decimal-separator-example";
// import multipleFocusExample from "./multiple-focus-example";
import sharedKeyboardsExample from "./shared-keyboards-example";

Mathlive.MathfieldElement.keypressSound = 'none';
Mathlive.MathfieldElement.plonkSound = 'none';

const app = document.querySelector<HTMLDivElement>("#app")!;


// decimalSeparatorExample(app);
// multipleFocusExample(app);
sharedKeyboardsExample(app);
