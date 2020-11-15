import { ApiMock } from 'mocks/index';

const test: ApiMock = (apiMock) => {
    // 테스트 api 조회
    apiMock.onGet('/api/test').reply((config) => {
        const { name = '' } = config.params;

        return [200, { data: `Test mock ${name}` }];
    });
};

export default test;
