import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';

import { RootReducerState } from 'modules';
import { wrapper } from 'modules/store';
import { TestAction } from 'modules/TestModule';

import { endServerSideSaga } from 'sagas';

const CalendarTypeDates: NextPage = () => {
    const data = useSelector<RootReducerState, number>(
        ({ TestReducer }) => TestReducer.data
    );

    return <div>{data}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(TestAction.delayIncrease(2));

        await endServerSideSaga(store);
    }
);

export default CalendarTypeDates;
