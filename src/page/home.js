import React from 'react';
import Footer from '../constant/footer';
import { Link } from "react-router-dom";

const Home = () => {
    function RenderTextGlitch(){
        return (
        <div className="mt-16 mb-16 z-20 block">
            <div className="container-fluid w-fit mx-auto">
                <p className="glitch text-black text-4xl md:text-7xl">
                <span className="text-center" aria-hidden={true}>Welcome to my blog</span>
                Welcome to my blog
                <span className="" aria-hidden={true}>Welcome to my blog</span>
                </p>
            </div>
        </div>
        );
    }
    function RenderBlogPost(){
        return(
            <div className="h-96 w-full bg-white shadow-md">
                <div className="h-4/6 bg-cover bg-center" style={{backgroundImage: `url('img/post-img.jpg')`}}></div>
                <div className="container w-11/12 mx-auto mt-2">
                <h4 className="text-2xl">My Story</h4>
                <p className="truncate ...">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div className="h-full w-full mt-5">
                    <p className="text-blue-700 mt-2 cursor-pointer float-left">Read more...</p>
                    <p className="mt-2 float-right">12:12 August 7, 2022</p>
                </div>
                </div>
            </div>
            
        );
    }
    function RenderWhatsNew(){
        return (
            <div className="container-fluid w-full z-10 bg-gradient-to-tr from-orange-600 via-red-500 to-rose-500 inline-block">
                <div className="h-fit w-5/6 mx-auto">
                    <div className="h-20 w-full mt-10">
                        <h2 className="text-3xl text-white text-center">Có gì mới?</h2>
                        <p className="text-xl mt-2 text-white text-center">Những blog mới của mình được cập nhật ở đây</p>        
                    </div>
                    <hr className="mt-3 mb-7 w-full mx-auto"></hr>
                    <div className="h-fit w-full mx-auto">
                        <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 float-left">
                        <RenderBlogPost/>
                        <RenderBlogPost/>
                        <RenderBlogPost/>
                        </div>
                    </div>
                    <div className="w-full h-20 mt-6 text-xl text-white float-right ">Xem thêm blog...</div>
                </div>
            </div>
        );
    }
    const about_me_line1 = "Mình tên là Nguyễn Lim Thái Hồ. Hiện tại mình đang là sinh viên năm 4 ngành Kỹ thuật phần mềm tại trường Đại Học Sài Gòn.";
    const about_me_line2 = "Blog này được xem như một Project để mình thực hiện vào mùa hè, để nghiên cứu và học hỏi thêm về React JS, Laravel cũng như TailwindCSS.";
    const about_me_line3 = "Ngoài ra thì đây cũng là nơi để mình upload những suy nghĩ, câu chuyện hay cuộc sống của mình. ";
    function RenderAboutMe(props){
        return (
            <div className="container-fluid w-full z-10 bg-white inline-block">
            <div className="h-fit w-5/6 mx-auto">
            <div className="h-12 w-full mt-10">
                <h2 className="text-3xl text-rose-500 text-center">Mình là ai?</h2>      
            </div>
            <hr className="mb-7 w-full mx-auto border-rose-500"></hr>
            <div className="h-fit w-full sm:w-2/6 md-2/6 float-left bg-black mb-9">
                <div className="h-96 w-full bg-white shadow-md outline outline-offset-2 outline-rose-500 rounded">
                    <div className="h-full bg-cover bg-center rounded" style={{backgroundImage: `url('img/myAvatar.jpg')`}}></div>
                </div>
            </div>
            <div className="h-fit w-full sm:w-4/6 float-left">
                <div className="container sm:ml-10 md:ml-10 xl:ml-20">
                <h1 className="text-2xl text-rose-500 font-bold">Xin chào,</h1>
                    <p className="text-xl mt-3">{props.line1}</p>
                    <p className="text-xl mt-3">{props.line2}</p>
                    <p className="text-xl mt-3">{props.line3}</p>
                    <p className="text-xl mt-3 text-rose-500"><Link to="/aboutme">Xem thêm...</Link></p>
                </div>
            </div>
            </div>
        </div>
        );
    }
    function RenderInstagramPost(){
        return(
            <div className="container-fluid w-full z-10 bg-gradient-to-tr from-orange-600 via-red-500 to-rose-500 inline-block">
            <div className="h-fit w-5/6 mx-auto">
            <div className="h-12 w-full mt-10">
                <h2 className="text-3xl text-white text-center">My Instagram</h2>      
            </div>
            <hr className="mt-3 mb-7 w-full mx-auto"></hr>
            <div className="h-fit w-full mx-auto">
                <div className="h-fit w-full grid md:grid-cols-4 gap-5 float-left">
                <div className="h-80 w-full bg-white shadow-md">
                    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url('img/myAvatar.jpg')`}}></div>
                </div>
                </div>
            </div>
            <div className="w-full h-20 mt-6 text-xl text-white float-right ">Xem thêm về instagram...</div>
            </div>
            </div>
        );
    }
    return(
        <>
        <RenderTextGlitch/>
        <RenderWhatsNew/>
        <RenderAboutMe line1={about_me_line1} line2={about_me_line2} line3={about_me_line3}/>
        <RenderInstagramPost/>
        <Footer/>
        </>
    );
}

export default Home;
// const place_blog_wallpaper = ReactDOM.createRoot(document.getElementById('place_blog_wallpaper'));
// place_blog_wallpaper.render(<RenderWallpaper/>);
// const place_text_glitch = ReactDOM.createRoot(document.getElementById('place_text_glitch'));
// place_text_glitch.render(<RenderTextGlitch/>);
// const place_whats_new = ReactDOM.createRoot(document.getElementById('place_whats_new'));
// place_whats_new.render(<RenderWhatsNew/>);
// const place_about_me = ReactDOM.createRoot(document.getElementById('place_about_me'));
// place_about_me.render(<RenderAboutMe line1={about_me_line1} line2={about_me_line2} line3={about_me_line3} line4={about_me_line4}/>);
// const place_footer = ReactDOM.createRoot(document.getElementById('place_footer'));
// place_footer.render(<RenderFooter/>);
// const place_instagram_post = ReactDOM.createRoot(document.getElementById('place_instagram_post'));
// place_instagram_post.render(<RenderInstagramPost/>);