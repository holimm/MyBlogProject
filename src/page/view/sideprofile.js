import React from "react";

function SideProfile(){
    return(
        <div className="w-11/12 float-right">
            <a href="https://www.instagram.com/millohh_/" target="_blank" rel="noreferrer">
                <div className="w-fit h-fit inline-block">
                <div className="w-12 h-12 bg-cover bg-center rounded-lg float-left" style={{backgroundImage: `url('/img/icon/instaicon.png')`}}></div>
                <div className="flex items-center text-lg w-12 h-12 ml-3 float-left">millohh_</div>
            </div></a>
            <div className="w-full mt-5 h-fit">
                <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/insta1.jpg')`}}></div>
            </div>
            <div className="w-full mt-5 h-fit">
                <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/insta2.jpg')`}}></div>
            </div>
            <div className="w-full mt-5 h-fit">
                <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/insta3.jpg')`}}></div>
            </div>
            <div className="w-full mt-5 h-fit">
                <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/insta4.jpg')`}}></div>
            </div>
            <div className="w-full mt-5 h-fit">
                <div className="w-fit mx-auto h-fit">
                <a href="https://www.instagram.com/millohh_/" target="_blank" rel="noreferrer"><button className="bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 mx-auto text-white p-2 rounded-md ">Follow on Instagram</button></a>
                </div>
            </div>
        </div>
    );
}

export default SideProfile;