//importaciones parciales
//module.exports.info = 
function info(text) {
    console.log( "INFO: ", text)
    return text;
}
//importaciones parciales
//module.exports.error =
function error(text) {
    console.log("ERROR: ",text)
    return text;
}
module.exports.info=info;
module.exports.error=error;

//exportaciones globales
//module.exports={info,error}