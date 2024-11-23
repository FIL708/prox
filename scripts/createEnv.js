import fs from "fs";
import readline from "readline";

const variables = {
    PORT: "3000",
};

const ENV_FILE = ".env";

const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const CHECKMARK = "✔️";
const CROSSMARK = "❌";
const INFO = "ℹ️";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const createEnvFile = () => {
    const envContent = Object.entries(variables)
        .map(([key, value]) => `${key}=${value}`)
        .join("\n");

    fs.writeFileSync(ENV_FILE, envContent);

    console.log(
        `${GREEN}${CHECKMARK} ${BOLD}Done! The .env file is now available in the current directory.${RESET}`
    );

    rl.close();
};

if (fs.existsSync(ENV_FILE)) {
    rl.question(
        `${YELLOW}${INFO} ${BOLD}The .env file already exists.${RESET} Do you want to overwrite it? (y/n): `,
        (overwrite) => {
            if (overwrite.toLowerCase() !== "y") {
                console.log(
                    `${RED}${CROSSMARK} ${BOLD}Operation canceled.${RESET} The .env file was not modified.`
                );
                rl.close();
                return;
            } else {
                fs.truncateSync(ENV_FILE, 0);
                console.log(
                    `${GREEN}${CHECKMARK} ${BOLD}The .env file has been overwritten.${RESET}`
                );
                createEnvFile();
            }
        }
    );
} else {
    console.log(`${INFO} ${BOLD}Creating a new .env file...${RESET}`);
    createEnvFile();
}
