import fetch from 'node-fetch';

const response = await fetch('https://catfact.ninja/fact');
const body = await response.json();

console.log(body.fact); 

