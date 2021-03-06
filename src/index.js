import choo from 'choo'
import html from 'choo/html'

import loginView from 'views/LoginView'

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
