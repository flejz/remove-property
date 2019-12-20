const reducer = require('array-reducer');
module.exports = function flush(o, ...ps) {
  const k = Object.keys(o);
  const p = reducer(ps, (a, i) => [ ...a,...(Array.isArray(i) ? i : [i])], []);
  return reducer(k, (a, i) =>{
    if (p.indexOf(i) === -1) {
      a[i] = o[i]
    }
    return a
  }, {});
}
