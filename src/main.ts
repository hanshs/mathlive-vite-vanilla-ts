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

mathfields.forEach(f => {
  // f.setOptions({}) // 1. doesn't break when called before render
  app.appendChild(f)
  f.setOptions({}) // 2. breaks when called after render or before makeSharedVirtualKeyboard call
})


Mathlive.makeSharedVirtualKeyboard({})

// 3. doesn't break when called after makeSharedVirtualKeyboard
// mathfields.forEach(f => f.setOptions({}))
// mathfields[0].setOptions({})
