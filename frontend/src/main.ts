const scripts = import.meta.glob(
    ['./components/**/*.ts', '!./components/**/*.spec.ts'],
    {
        eager: true,
    }
);

const styles = import.meta.glob(
    ['./styles/**/*.css', './components/**/*.css'],
    { eager: true }
);

console.log(
    `
    🚀✨ %cInitialization Process Started! ✨🚀
    --------------------------------------
    %c
    📅  Timestamp: ${new Date().toLocaleString()}
    🛠️  Environment: ${process.env.NODE_ENV || 'development'}
    📦  Ready to load resources...
    
    `,
    'color: #4CAF50; font-size: 16px; font-weight: bold;',
    'color: #2196F3; font-size: 14px;'
);

const scriptsList = [];
const stylesList = [];

for (const path in scripts) {
    scriptsList.push(...path.split('/').splice(-1));
}

for (const path in styles) {
    stylesList.push(...path.split('/').splice(-1));
}

console.log(
    `
    🎬✨ %cInitialization Complete! ✨🎬
    ----------------------------------------
    📂 %cLoaded Scripts:
    ${scriptsList.map((script) => `   📜 ${script}`)}
    🎨 %cLoaded Styles:
    ${stylesList.map((style) => `   🎨 ${style}`)}
    
    🚀 Application is ready to rock!
    `,
    'color: #4CAF50; font-size: 16px; font-weight: bold;',
    'color: #FF9800; font-size: 14px;',
    'color: #03A9F4; font-size: 14px;'
);
