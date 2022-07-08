import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    function RenderWallpaper(){
        return (
        <div className="w-full h-full">
            <div className="bg-container w-full" style={{height: '100vh'}}>
            <div className="bg-cover bg-left sm:bg-center h-full" style={{backgroundImage: "url('img/blog-wallpaper.jpg')"}}>
                <Header />
            </div>
            </div>
        </div>
        );
    }
    return(
        <>
        <RenderWallpaper/>
        <Outlet/>
        </>
    );
}

export default Layout;