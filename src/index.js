module.exports = function reverse (n) {
  let mod = Math.abs(n);
  let str = String(mod).split('').reverse().join('');
return str;
}
