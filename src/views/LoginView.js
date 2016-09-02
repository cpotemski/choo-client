const html = require('choo/html')

const loginView = (state, prev, send) => {
  const login = () => {
    send('login')
  }

  return html`
    <main>
      <h1>Login</h1>
      <button onclick=${login}>Login</button>
    </main>
  `
}

module.exports = loginView;
