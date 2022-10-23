const os = require('os');

/* 

    - Información del sistema: os.userInfo()
    - Tiempo que ha transcurrido desde que se encendió la computadora: os.uptime()
    - OS de la máquina: os.platform()
    - Ver memoria total: os.totalmen()
    - Ver memoria disponible: os.freemen()
    - Version del OS: os.release()

    Mac (darwin)
    Windows (win32)
    Linux (linux)
*/

console.log(os.userInfo())
console.log(os.uptime()) 
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem(),
});