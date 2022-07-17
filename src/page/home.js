import {React} from 'react';
import Footer from '../constant/footer';
import { Link, useParams } from "react-router-dom";
import {GetBlogs} from './accessible/axiosdata';
import { formatDate } from './accessible/message';

const Home = () => {
    var blogsAxios = GetBlogs();
    var blogs = blogsAxios.filter(object =>{
        return object.state !== 0;
    });
    // blogs.splice(indexOfBlogs);
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
        var {page} = useParams()
        if(!page) page=1;
        var index=-1;
        var from = (page-1)*3;
        var to = from + 3;
        const RenderSingleBlog = blogs.map((items,id) => {
            index++;
            if(index >= from && index < to){
                return(
                    <div className="h-96 w-full bg-white shadow-md" key={id}>
                        <div className="h-4/6 bg-cover bg-center" style={{backgroundImage: `url('/${items.image}')`}}></div>
                        <div className="container w-11/12 mx-auto mt-2">
                        <h4 className="text-2xl truncate">{items.title}</h4>
                        <p className="truncate ...">{items.content}</p>
                        <div className="h-full w-full mt-5">
                            <Link to={`/detail-blog/${items.id}`} ><p className="text-blue-700 mt-2 cursor-pointer float-left">Read more...</p></Link>
                            <p className="mt-2 float-right">{formatDate(items.date)}</p>
                        </div>
                        </div>
                    </div>
                ); 
            }
            else{
                return '';
            }
        }) 
        return <>{RenderSingleBlog}</>;
    }
    function RenderPagination(){
        var length = blogs.length;
        var numberPage = Math.ceil(length/3)
        var renderPagination=[];
        for(var i=1;i<=numberPage;i++){
            renderPagination.push(
                <Link to={`/page=${i}`}><div className='bg-white hover:bg-slate-50 text-rose-500 py-3 px-4 mx-1 float-left cursor-pointer'>{i}</div></Link>
            );
        }
        return renderPagination;
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
                    <div className="h-fit w-full mx-auto inline-block">
                        <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 float-left">
                        <RenderBlogPost/>
                        </div>
                    </div>
                    <div className="w-full h-fit mt-5 text-xl text-white">
                        <RenderPagination/>
                    </div>
                    <div className="w-full h-20 mt-6 text-xl text-white float-right ">Xem thêm blog...</div>
                </div>
            </div>
        );
    }
    const about_me_line1 = "Mình tên là Nguyễn Lim Thái Hồ. Hiện tại mình đang là sinh viên năm 4 ngành Kỹ thuật phần mềm tại trường Đại Học Sài Gòn.";
    const about_me_line2 = "Blog này được xem như một Project để mình thực hiện vào mùa hè, để nghiên cứu và học hỏi thêm về React JS, NodeJS cũng như TailwindCSS.";
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
            <div className="h-fit w-full mx-auto inline-block">
                <div className="h-fit w-full grid md:grid-cols-4 gap-5 float-left">
                <div className="h-80 w-full bg-white shadow-md">
                    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url('img/insta1.jpg')`}}></div>
                </div>
                <div className="h-80 w-full bg-white shadow-md">
                    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url('img/insta2.jpg')`}}></div>
                </div>
                <div className="h-80 w-full bg-white shadow-md">
                    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url('img/insta3.jpg')`}}></div>
                </div>
                <div className="h-80 w-full bg-white shadow-md">
                    <div className="h-full bg-cover bg-center" style={{backgroundImage: `url('img/insta4.jpg')`}}></div>
                </div>
                </div>
            </div>
            <a href="https://www.instagram.com/millohh_/" target="_blank" rel="noreferrer"><div className="w-full h-20 mt-7 text-xl text-white float-right ">Xem thêm trên instagram của tôi...</div></a>
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