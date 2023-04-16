'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  let a = [].concat(grades);
  let notas = [];

  for(let i = 0; i<a.length;i++){
    if(a[i]<38){
     notas[i] =a[i]; 
    }
    else if((((Math.floor(a[i] / 5) * 5) + 5)- a[i])<3){
     notas[i] = (Math.floor(a[i] / 5) * 5) + 5;
    }
    else if((((Math.floor(a[i] / 5) * 5) + 5)- a[i])>=3){
     notas[i] = a[i];
    }
  }

  return notas;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
