import React from "react";

function SideProfile(){
    return(
        <div className="w-11/12 float-right">
            <div className="w-full h-fit">
                <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/myAvatar.jpg')`}}></div>
            </div>
            <button className="bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 mx-auto text-white p-2 mt-3 rounded-md ">Follow on Instagram</button>
        </div>
    );
}

export default SideProfile;