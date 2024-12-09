import chalk from 'chalk';

const bg = chalk.bgHex('#0066ff').hex('#ffffff');

const PROX = `
${bg(' ┌──────────────────────────┐ ')}
${bg(' │ ■■■■   ■■■■   ■■■  █   █ │ ')}
${bg(' │ █   █  █   █ █   █  █ █  │ ')}
${bg(' │ ■■■■   ■■■■  █   █   █   │ ')}
${bg(' │ █      █  █  █   █  █ █  │ ')}
${bg(' │ █      █   █  ■■■  █   █ │ ')}
${bg(' └──────────────────────────┘ ')}
`;
console.log(PROX);
