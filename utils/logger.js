const info = (...params) => {
  console.log(...params);
};
const error = (...paramas) => {
  console.error(...params);
}

module.exports = {
  info,
  error
}