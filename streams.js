/* 
    const { writeFile } = require('fs/promises');

    const createBigFile = async () => {
        await writeFile('./data/bigfile.txt', 'Hello World! '.repeat(1000))
    }
    createBigFile() 
*/

const { createReadStream } = require('fs')

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8',
})

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log('Termine senpai, felicitame uwu');
})

stream.on('error', (error) => {
    console.log(error);
})