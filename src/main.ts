import * as Mathlive from 'mathlive'

import 'mathlive/dist/mathlive-fonts.css';
import 'mathlive/dist/mathlive-static.css';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const defaultOptions: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: 'none',
  keypressSound: 'none',
  virtualKeyboardMode: 'onfocus'
}

const mathfields = [
  new Mathlive.MathfieldElement(defaultOptions),
  new Mathlive.MathfieldElement(defaultOptions),
  new Mathlive.MathfieldElement(defaultOptions)
]

mathfields.forEach(f => app.appendChild(f))

Mathlive.makeSharedVirtualKeyboard({})
