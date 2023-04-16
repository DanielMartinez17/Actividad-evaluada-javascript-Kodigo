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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
let mensaje = s;
let cantletrascambia = 0;

    for (let i = 0; i < mensaje.length; i += 3) {
      if (mensaje[i] !== 'S') {
        cantletrascambia++;
      }
      if (mensaje[i+1] !== 'O') {
        cantletrascambia++;
      }
      if (mensaje[i+2] !== 'S') {
        cantletrascambia++;
      }
    }
    return cantletrascambia;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
