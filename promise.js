const { readFile } = require("fs");
const { promisify } = require('util');

// Modulo "promisify" retorna un promesa
const readFilePromise = promisify(readFile);

/* 
  const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
      readFile(pathFile, "utf-8", (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  };
*/


// PROMISES
// getText('./data/fourth.txt')
//     .then(result => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(e => console.log(e))


// ASYNC - AWAIT
const obtenerData = async () => {
  try {

    const result1 = await readFilePromise("./data/first.txt", 'utf-8');
    console.log(result1);
    const result2 = await readFilePromise("./data/second.txt", 'utf-8');
    console.log(result2);
    const result3 = await readFilePromise("./data/third.txt", 'utf-8');
    console.log(result3);

  } catch (error) {
    console.log(error);
  }
};

obtenerData("./data/fourth.txt");
