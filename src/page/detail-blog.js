import React, { useEffect } from "react";
import { ReactDOM, useState } from "react";
import Header from "./header";
import Footer from "../constant/footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailBlog(){
    var { id } = useParams();
    function RenderContentPost(){
        const [blogs,setBlogs] = useState([{}]);
        useEffect(()=>{
            axios.get('/getblogsdetail',{
                params:{
                    id: id
                },    
            })
            .then(res => {
                setBlogs(res.data);
            })
            .catch(function(err){
                console.log(err);
            })
        },[]);  
        return(
            <div className="w-full h-fit">
                <div className="w-full h-96 bg-cover bg-center" style={{backgroundImage: `url('/${blogs[0].image}')`}}></div>
                <h2 className="text-rose-500 text-4xl mt-5 text-center">{blogs[0].title}</h2>
                <p className="text-rose-500 text-xl mt-5 text-center">HoLim / {blogs[0].category}</p>
                <hr className="border-rose-500 mt-5"></hr>
                <p className="text-2xl font-mono my-6" dangerouslySetInnerHTML={{__html: blogs[0].content}}></p>
            </div>   
        );
    }
    function RenderPrevNextPost(){
        return(
            <div className="w-full h-fit mt-5 inline-block">
                <div className="w-3/6 h-full float-left">
                    <h2 className="text-rose-500 text-3xl text-left">&#8592; Blog Trước</h2>
                </div>
                <div className="w-3/6 h-full float-left">
                    <h2 className="text-rose-500 text-3xl text-right">Blog Sau &#8594;</h2>
                </div>
            </div>
        );
    }
    function RenderRelatedPost(){
        const [blogs,setBlogs] = useState([{}]);
        useEffect(()=>{
            axios.get('/getblogs')
            .then(res => {
                setBlogs(res.data);
            })
            .catch(function(err){
                console.log(err);
            })
        },[]);
        const RenderRelatedBlog = blogs.map((items,id) => {
            return(   
                <div className="w-full h-full" key={id}>
                    <div className="w-full h-56 bg-cover bg-center" style={{backgroundImage: `url('/img/post-img.jpg')`}}></div>
                    <p className="text-rose-500 text-md my-1">Blog</p>
                    <h2 className="text-rose-500 text-3xl my-1 mb-5">{items.title}</h2>
                </div>
            );         
        })
        function RenderRelatedPostContainer() {
            return(
                <div className="w-full h-fit mt-5">
                    <h2 className="text-rose-500 text-3xl">Related Post</h2>
                    <div className="w-full mt-5 grid gap-4 grid-cols-3">
                    {RenderRelatedBlog}
                    </div>
                </div>
            );       
        }
        return <RenderRelatedPostContainer/>
    }
    function RenderComment(){
        return(
            <div className="w-full h-fit mt-5">
                <h2 className="text-rose-500 text-3xl">Comments</h2>
            </div>
        );
    }
    function RenderPost(){
        return(
            <div className="w-5/6 h-full mt-12 mx-auto">
                <div className="w-full md:w-9/12 h-fit float-left">
                    <RenderContentPost/>
                    <hr className="border-rose-500 mt-5"></hr>
                    <RenderPrevNextPost/>
                    <hr className="border-rose-500 mt-5"></hr>
                    <RenderRelatedPost/>
                    <hr className="border-rose-500 mt-5"></hr>
                    <RenderComment/>
                </div>
                <div className="w-full md:w-3/12 h-fit float-left">
                    <div className="w-11/12 float-right">
                        <div className="w-full h-fit">
                            <div className="w-full h-72 bg-cover bg-center" style={{backgroundImage: `url('/img/myAvatar.jpg')`}}></div>
                        </div>
                        <button className="bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 mx-auto text-white p-2 mt-3 rounded-md ">Follow on Instagram</button>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <>        
        <Header/>
        <hr className="border-rose-500 mt-2"></hr>
        <RenderPost/>
        <Footer/>
        </>
    );
}

export default DetailBlog;