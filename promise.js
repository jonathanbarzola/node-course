const { readFile } = require('fs');

const getText = (pathFile) => {

    return new Promise(function (resolve, reject) {

        readFile(pathFile, 'utf-8', (error, data) => {
            
            if (error) {
                reject(error)
            }
    
            resolve(data)
        })
    })
    
}

getText('./data/four.txt')
    .then(data => console.log(data))
    .catch(e => console.log(e)) 