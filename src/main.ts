import "mathlive/dist/mathlive-fonts.css";
import "mathlive/dist/mathlive-static.css";
import "./style.css";

import decimalSeparatorExample from "./decimal-separator-example";
// import sharedKeyboardsExample from "./shared-keyboards-example";

import text from "./text";

const app = document.querySelector<HTMLDivElement>("#app")!;

text(app, "h4", `Decimal separator option set to ","`);
text(app, "p", `Type "1,5" or "25,5" and see console.log for output`);
decimalSeparatorExample(app);

// heading(app, "Shared keyboards example");
// sharedKeyboardsExample(app);
