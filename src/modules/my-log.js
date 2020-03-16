// importaciones parciales
// module.exports.info =

const info = (text) => {
  console.log('INFO: ', text);
  return text;
};
// importaciones parciales
// module.exports.error =
const error = (text) => {
  console.log('ERROR: ', text);
  return text;
};
module.exports.info = info;
module.exports.error = error;
// exportaciones globales
// module.exports={info,error}
