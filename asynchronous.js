// Task 3: Asynchronous File Handling
// To read a text file and count the number of words in it using Node.js, 
// you can use the fs module for file handling and async/await for asynchronous operations:

const fs = require('fs');

async function countWordsInFile() {
    try {
        const data = await fs.promises.readFile('data.txt', 'utf-8');
        const wordCount = data.split(/\s+/).length;
        console.log('Total word count:', wordCount);
    } catch (error) {
        console.error('Error reading the file:', error.message);
    }
}

countWordsInFile();