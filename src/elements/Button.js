import html from 'choo/html'

export default (label, onClick) => {
  return html`
    <button onclick=${onClick}>${label}</button>
  `
}
