import html from 'choo/html'

import Button from 'elements/Button'

export default (state, prev, send) => {
  return html`
    <main>
      <h1>Login</h1>
      ${Button('Login', () => send('login'))}
    </main>
  `
}
