import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import { Outlet, Link } from "react-router-dom";

const Login = () => {
    function RenderLogin(){
        return (
        <div className="w-full h-full">
            <div className="bg-container w-full" style={{height: '100vh'}}>
            <div className="bg-cover bg-left sm:bg-center h-full" style={{backgroundImage: "url('img/blog-wallpaper.jpg')"}}>
                <Header />
                <div className='w-2/6 h-fit bg-white mx-auto mt-28'>
                    <div className='w-4/5 mx-auto'>
                        <div className='w-full h-fit inline-block'>
                            <h1 className='text-rose-500 text-center text-3xl font-semibold w-full mt-5'>Đăng nhập</h1>
                        </div>
                        <hr className='border-rose-500 w-full mt-5'></hr>
                        <div className='w-full h-fit inline-block'>
                        <form className="mt-5">
                            <label className='text-rose-500 text-md' >Tên đăng nhập: </label>
                            <input type="text" className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='Hãy nhập username'/>
                            <label className='text-rose-500 text-md' >Mật khẩu: </label>
                            <input type="text" className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='**********'/>
                            <input className='my-6 mb-12 w-full py-2 bg-gradient-to-r text-white from-rose-400 via-red-500 to-rose-600 rounded-md' type="submit" value="Đăng nhập"/>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
    return(
        <>
        <RenderLogin/>
        </>
    );
}

export default Login;