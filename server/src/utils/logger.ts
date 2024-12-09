import { createLogger, format, transports } from 'winston';
import chalk, { ChalkInstance } from 'chalk';
const { combine, timestamp, printf } = format;

const levelColors: Record<string, ChalkInstance> = {
    error: chalk.bgRed.white.bold,
    warn: chalk.bgYellow.black.bold,
    info: chalk.bgBlue.white.bold,
    debug: chalk.bgGreen.white.bold,
};

const messageColors: Record<string, ChalkInstance> = {
    error: chalk.red,
    warn: chalk.yellow,
    info: chalk.blue,
    debug: chalk.green,
};

const customFormat = printf(({ level, message, timestamp }) => {
    const levelLabel = levelColors[level]
        ? levelColors[level](`[${level.toUpperCase()}] ${timestamp}`)
        : `[${level.toUpperCase()}] ${timestamp}`;

    const coloredMessage = messageColors[level]
        ? messageColors[level](message)
        : message;
    return `${levelLabel}\n${coloredMessage}\n`;
});

export const logger = createLogger({
    level: 'info',
    format: combine(timestamp({ format: 'HH:mm DD-MM-YYYY' }), customFormat),
    transports: [new transports.Console()],
});

if (process.env.NODE_ENV?.toLowerCase() === 'production') {
    logger.add(
        new transports.Console({
            format: format.simple(),
        })
    );
}
