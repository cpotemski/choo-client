const rollup = require('rollup')
const rollupConfig = require('./rollup.config.js')

let cache

rollup(Object.assign({}, rollupConfig, { cache })).then(bundle => {
  cache = bundle
  bundle.write(rollupConfig)
})
