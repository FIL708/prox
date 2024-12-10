console.log('INITIALIZATION');

import.meta.glob(['./components/**/*.ts', '!./components/**/*.spec.ts'], {
    eager: true,
});

import.meta.glob('./styles/**/*.css', { eager: true });
