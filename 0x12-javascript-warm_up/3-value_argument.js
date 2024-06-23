#!/usr/bin/node

// Get the first argument passed to the script
const firstArg = process.argv[2];

// Check if the first argument is undefined
if (firstArg === undefined) {
    console.log('No argument');
} else {
    console.log(firstArg);
}
~
