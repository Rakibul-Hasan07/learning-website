import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import LeftNav from '../../pages/Shared/LeftNav/LeftNav';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className="col-span-1"><LeftNav></LeftNav></div>
                <div className="col-span-3"><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Root;