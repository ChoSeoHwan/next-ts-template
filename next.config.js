module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/calendar',
                permanent: true
            },
            {
                source: '/calendar',
                destination: '/calendar/month',
                permanent: true
            }
        ];
    }
};
