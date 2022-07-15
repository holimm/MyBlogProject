import React from "react";
import {Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="container-fluid w-full z-10 inline-block bg-white">
            <hr className="mt-7 w-full mx-auto border-rose-500"></hr>
            <div className="h-auto w-full">
            <div className="h-fit w-5/6 mx-auto">
                <div className="h-10 w-full mt-10">
                <h2 className="text-3xl text-rose-500 text-center">My Footer</h2>    
                </div>
                <div className="h-10 w-full mt-10">
                    <ul className="flex justify-between items-start w-full sm:w-2/4 mx-auto">
                    <Link to="/"><li className="text-lg font-sans hover:text-rose-500">Trang chính</li></Link>
                    <Link to="/aboutme"><li className="text-lg font-sans hover:text-rose-500">Tôi là ai?</li></Link>
                    <li className="text-lg font-sans hover:text-rose-500">Blog</li>
                    <li className="text-lg font-sans hover:text-rose-500">Liên hệ</li>
                    </ul>
                </div>
                <div className="h-10 w-full mt-10">
                <div className="justify-items-center w-1/4 mx-auto grid grid-cols-3">
                    <a href="https://www.facebook.com/tea.limho/" target="_blank" rel="noreferrer"><img className="h-full ..." src="/img/icon/icon_fb.svg" alt="FBIcon"></img></a>
                    <a href="https://www.instagram.com/millohh_/" target="_blank" rel="noreferrer"><img className="h-full ..." src="/img/icon/icon_insta.svg" alt="InstagramIcon"></img></a>
                    <a href="https://github.com/holimm" target="_blank" rel="noreferrer"><img className="h-full ..." src="/img/icon/icon_github.svg" alt="GitIcon"></img></a>
                </div>
                </div>
                <div className="h-10 w-full mt-10">
                <h2 className="text-md text-black text-center pb-20">Bản quyền thuộc về (C) Nguyễn Lim Thái Hồ</h2>    
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;