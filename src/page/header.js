import React from 'react';
import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let isLoggedIn = sessionStorage.getItem('username');
    const navigate = useNavigate();
    function LoginButton() {
        return(
            <Link to="/login"><li className="mx-2 md:mx-6 lg:mx-12 text-xl text-white font-sans box-decoration-clone bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-600 hover:to-red-700 hover:duration-300 px-3 py-2">Đăng nhập</li></Link>
        );
    }   
    function LogOutButton() {
        function Signout() {
            sessionStorage.clear();
            navigate('/');
        }
        function ShowDropdown(state){
            state ? document.getElementById('logindropdown').style.display = 'block' : document.getElementById('logindropdown').style.display = 'none';          
        }
        return(
            <>           
            {/* <li type='button' className="mx-2 md:mx-6 lg:mx-12 text-xl text-rose-500 font-sans px-3 py-2 cursor-pointer" onClick={Signout}>Đăng xuất</li>   */}
            <div onMouseEnter={()=>ShowDropdown(true)} onMouseLeave={()=>ShowDropdown(false)} className="mx-2 md:mx-6 lg:mx-12 text-xl text-white font-sans box-decoration-clone bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-600 hover:to-red-700 hover:duration-300 px-3 py-2 cursor-pointer relative">
                <span>Xin chào, {isLoggedIn}</span>
                <div className='bg-white -ml-3 w-full mt-2 absolute cursor-pointer hidden rounded-md' id='logindropdown'>
                    <Link to='/write-blog'><div className="hover:bg-rose-500 hover:text-white w-5/6 mx-auto my-2 py-1 text-center text-xl text-rose-500 font-sans rounded-md">Viết Blog</div></Link>
                    <Link to='/manage-blogs/visibility=showing'><div className="hover:bg-rose-500 hover:text-white w-5/6 mx-auto my-2 py-1 text-center text-xl text-rose-500 font-sans rounded-md">Quản lý Blogs</div></Link>
                    <div className="hover:bg-rose-500 hover:text-white w-5/6 mx-auto mt-2 mb-3 py-1 text-center text-xl text-rose-500 font-sans rounded-md" onClick={Signout}>Đăng xuất</div>
                </div>
            </div>          
            </>
        );
    }    
    function RenderHeaderNav() {
        return (
        <nav className="hidden sm:flex justify-between items-center bg-white sticky top-0 w-full h-20 z-30">
            <div className="sm:float-right"></div>
            <div className="float-right mr-5">
                <ul className="flex justify-between items-start">
                <Link to="/"><li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Trang chính</li></Link>
                <Link to="/aboutme"><li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Tôi là ai?</li></Link>
                <Link to="/blogs"><li className="mx-2 md:mx-6 lg:mx-12 text-xl font-sans hover:text-rose-500 px-3 py-2">Blogs</li></Link>
                    {isLoggedIn ? <LogOutButton/> : <LoginButton/>}
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