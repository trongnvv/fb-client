
const delay = (ms = 1000) => {
  return new Promise(r => setTimeout(r, ms));
}
module.exports = {
  delay
}