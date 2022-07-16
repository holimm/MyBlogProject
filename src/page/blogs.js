import React, { useEffect } from "react";
import { ReactDOM, useState } from "react";
import Header from "./header";
import Footer from "../constant/footer";
import SideProfile from "./view/sideprofile";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Blogs(){
    function GetBlog(){
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
        return blogs;
    }
    function RenderContentPost(){
        var blogs = GetBlog();
        var test = 0;
        const RenderRelatedBlog = blogs.map((items,id) => {
            test++;
            if(test<=5){
                return(   
                    <div className="w-full h-fit" key={id}>
                        <div className="w-full h-96 bg-cover bg-center" style={{backgroundImage: `url('/${items.image}')`}}></div>
                        <Link to={`/detail-blog/${items.id}`}><h2 className="text-rose-500 text-4xl mt-5 text-center">{items.title}</h2></Link>
                        <p className="text-rose-500 text-xl mt-5 text-center">{items.date}</p>
                        <hr className="border-rose-500 w-2/4 mx-auto my-8"></hr>
                    </div>   
                );        
            } 
            else{
                return;
            }
        })
        function RenderRelatedPostContainer() {
            return(
                <div className="w-full h-fit">
                    {RenderRelatedBlog}
                </div>
            );       
        }
        return <RenderRelatedPostContainer/>
    }
    function RenderPost(){
        return(
            <div className="w-5/6 h-full mt-12 mx-auto">
                <div className="w-full md:w-9/12 h-fit float-left">
                    <RenderContentPost/>
                </div>
                <div className="w-full md:w-3/12 h-fit float-left">
                    <SideProfile/>
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

export default Blogs;