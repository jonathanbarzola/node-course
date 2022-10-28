const { readFile } = require("fs");
const { result } = require("lodash");

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

// PROMISES
// getText('./data/fourth.txt')
//     .then(result => console.log(result))
//     .then(() => getText('./data/first.txt'))
//     .then(result => console.log(result))
//     .catch(e => console.log(e))

// ASYNC - AWAIT
const obtenerData = async () => {
  try {
    const result1 = await getText("./data/first.txt");
    console.log(result1);
    const result2 = await getText("./data/second.txt");
    console.log(result2);
    const result3 = await getText("./data/third.txt");

    throw new Error("Hijole krnal algo se averió");

    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};

obtenerData("./data/fourth.txt");
