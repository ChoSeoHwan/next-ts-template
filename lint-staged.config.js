// eslint-disable-next-line @typescript-eslint/no-var-requires
const escape = require('shell-quote').quote;
const isWin = process.platform === 'win32';

module.exports = {
    '**/*.{js,jsx,ts,tsx}': (filenames) => {
        const escapedFileNames = filenames
            .map(
                (filename) =>
                    `"${
                        isWin
                            ? filename.replace(/[[\]]/g, '[$&]')
                            : escape([filename])
                    }"`
            )
            .join(' ');
        return [
            `yarn format --with-node-modules ${escapedFileNames}`,
            `yarn lint:fix ${filenames
                .map((f) => `"${f.replace(/[[\]]/g, '[$&]')}"`)
                .join(' ')}`,
            `git add ${escapedFileNames}`
        ];
    },
    '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (filenames) => {
        const escapedFileNames = filenames
            .map(
                (filename) =>
                    `"${
                        isWin
                            ? filename.replace(/[[\]]/g, '[$&]')
                            : escape([filename])
                    }"`
            )
            .join(' ');
        return [
            `yarn format ${escapedFileNames}`,
            `git add ${escapedFileNames}`
        ];
    }
};
