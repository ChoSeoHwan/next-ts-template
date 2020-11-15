import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../.env.test') });

import '@testing-library/jest-dom/extend-expect';

// jest 타입아웃 30초로 설정
jest.setTimeout(30000);
