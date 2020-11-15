import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
    data?: string;
    message?: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
    const origin = req.headers['origin'] || '*';

    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Access-Control-Allow-Origin'
    );

    if (req.method === 'GET') {
        const { name = '' } = req.query;
        res.status(200).json({ data: `Test Api ${name}` });
    } else if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        res.status(400).json({ message: 'ERROR' });
    }
};
