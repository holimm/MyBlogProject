import React from 'react';
import {Link } from "react-router-dom";

const Header = () => {
    function RenderHeaderNav() {
        return (
        <nav className="hidden sm:flex justify-between items-center bg-white sticky top-0 w-full h-20 z-30">
            <div className="sm:float-right"></div>
            <div className="float-right mr-5">
                <ul className="flex justify-between items-start">
                <Link to="/"><li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Trang chính</li></Link>
                <Link to="/aboutme"><li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Tôi là ai?</li></Link>
                <li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Blog</li>
                <li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Liên hệ</li>
                <Link to="/login"><li className="mx-2 md:mx-6 lg:mx-12 text-xl text-white font-sans box-decoration-clone bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-600 hover:to-red-700 hover:duration-300 px-3 py-2">Đăng nhập</li></Link>
                </ul>
            </div>
        </nav> 
        );
    }
    function RenderHeaderNavMobile() {
        return (
        <nav className="flex sm:hidden justify-between items-center bg-white sticky top-0 w-full h-20 z-30">
            <div className="float-right">        

            </div>
        </nav>    
    );
    }
    return(
        <>
        <RenderHeaderNav/>
        <RenderHeaderNavMobile/>
        </>
    );
}

export default Header;