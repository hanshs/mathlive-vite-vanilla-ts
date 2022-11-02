import "mathlive/dist/mathlive-fonts.css";
import "mathlive/dist/mathlive-static.css";
import "./style.css";

// import decimalSeparatorExample from "./decimal-separator-example";
// import sharedKeyboardsExample from "./shared-keyboards-example";
import multipleFocusExample from "./multiple-focus-example";

const app = document.querySelector<HTMLDivElement>("#app")!;

multipleFocusExample(app);
// sharedKeyboardsExample(app);
// decimalSeparatorExample(app);
