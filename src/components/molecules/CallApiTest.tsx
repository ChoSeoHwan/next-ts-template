import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootReducerState } from 'modules';
import { TestAction } from 'modules/TestModule';

import Button from 'components/atoms/Button';

const CallApiTest: FC = () => {
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const data = useSelector<RootReducerState, string>(
        ({ TestReducer }) => TestReducer.data
    );

    const handleFetchData = () => {
        let name = '';
        if (inputRef.current) {
            name = inputRef.current.value;
        }
        dispatch(TestAction.fetchData(name));
    };

    return (
        <div>
            <input
                placeholder="input name"
                defaultValue="SeoHwan Cho"
                ref={inputRef}
            />
            <Button onClick={handleFetchData}>Call Api</Button>
            <p>{data}</p>
        </div>
    );
};

export default CallApiTest;
