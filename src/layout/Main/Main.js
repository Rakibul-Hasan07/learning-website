import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNav from '../../pages/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <div className='grid justify-center lg:grid-cols-4'>
                <div className="lg:col-span-1"><LeftNav></LeftNav></div>
                <div className='lg:col-span-3'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;