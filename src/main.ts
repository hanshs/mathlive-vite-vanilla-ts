import * as Mathlive from 'mathlive'

import 'mathlive/dist/mathlive-fonts.css';
import 'mathlive/dist/mathlive-static.css';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const options: Partial<Mathlive.MathfieldOptions> = {
  plonkSound: 'none',
  keypressSound: 'none',
  // virtualKeyboardMode: 'onfocus'
}

app.appendChild(new Mathlive.MathfieldElement(options))
app.appendChild(new Mathlive.MathfieldElement(options))

// comment this out and uncomment line 13 to see the difference
document.querySelectorAll<Mathlive.MathfieldElement>('math-field').forEach(element => {
  element.setOptions({
    virtualKeyboardMode: 'onfocus'
  })
})

Mathlive.makeSharedVirtualKeyboard({})
