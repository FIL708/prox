console.log('INITIALIZATION');

import.meta.glob(['./components/**/*.ts', '!./components/**/*.test.ts'], {
    eager: true,
});

import.meta.glob('./styles/**/*.css', { eager: true });
