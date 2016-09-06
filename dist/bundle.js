'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var choo = _interopDefault(require('choo'));
var html = _interopDefault(require('choo/html'));

var Button = (label, onClick) => {
  return html`
    <button onclick=${onClick}>${label}</button>
  `
}

var loginView = (state, prev, send) => {
  return html`
    <main>
      <h1>Login</h1>
      ${Button('Login', () => send('login'))}
    </main>
  `
}

const app = choo()

app.model({
  state: { title: 'Not quite set yet' },
  effects: {
    login: (data, state, send, done) => {
      send('setSessionToken', 'sfdhjsdfskjdf', () => {
        send('location:setLocation', {location: '/'}, done)
      })
    }
  },
  reducers: {
    update: (data, state) => ({ title: data }),
    setSessionToken: (data, state) => ({ sessionToken: data })
  }
})

const mainView = (state, prev, send) => {
  if(!state.sessionToken) {
    send('location:setLocation', {location: '/login'});
  }

  return html`
    <main>
      <h1>Title: ${state.title}</h1>
      <input
        type="text"
        oninput=${(e) => send('update', e.target.value)}>
    </main>
  `
}

app.router((route) => [
  route('/', mainView),
  route('/login', loginView)
])

const tree = app.start()
document.body.appendChild(tree)