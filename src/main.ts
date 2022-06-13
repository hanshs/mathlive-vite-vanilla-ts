import * as Mathlive from 'mathlive'

import 'mathlive/dist/mathlive-fonts.css';
import 'mathlive/dist/mathlive-static.css';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <math-field plonk-sound="none" keypress-sound="none" virtual-keyboard-mode="onfocus"></math-field>
  <math-field plonk-sound="none" keypress-sound="none" virtual-keyboard-mode="onfocus"></math-field>
`

const options: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: 'none',
  keypressSound: 'none',
  virtualKeyboardMode: 'onfocus'
}

app.appendChild(new Mathlive.MathfieldElement(options))
app.appendChild(new Mathlive.MathfieldElement(options))

Mathlive.makeSharedVirtualKeyboard({})
