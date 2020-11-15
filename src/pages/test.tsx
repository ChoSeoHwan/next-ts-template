import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';

import { RootReducerState } from 'modules';
import { wrapper } from 'modules/store';
import { TestAction } from 'modules/TestModule';

import { endServerSideSaga } from 'sagas';

const CalendarTypeDates: NextPage = () => {
    const data = useSelector<RootReducerState, string>(
        ({ TestReducer }) => TestReducer.data
    );

    return <div>{data}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(TestAction.fetchData('SeoHwan Cho'));

        await endServerSideSaga(store);
    }
);

export default CalendarTypeDates;
