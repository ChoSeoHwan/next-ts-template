module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/test',
                permanent: true
            }
        ];
    }
};
