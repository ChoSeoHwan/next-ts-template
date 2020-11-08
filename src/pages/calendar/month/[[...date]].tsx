import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CalendarTypeDates: NextPage = () => {
    const router = useRouter();

    console.log(router);

    return <div />;
};

export default CalendarTypeDates;
