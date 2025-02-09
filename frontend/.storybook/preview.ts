import type { Preview } from '@storybook/html';
import '../src/styles/main.css';
import '../src/styles/reset.css';
import '../src/styles/variables.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
