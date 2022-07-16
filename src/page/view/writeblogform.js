import React from "react";
import { useState } from "react";
import axios from "axios";
import moment from "moment";
import vietnameseConvert from "../accessible/vietnameseConvert";
import {messageSweetAlert} from "../accessible/message";

function FormWriteBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [imgfile, setImgFile] = useState();

    
    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handleContentChange(e){
        let contentlength = document.getElementById('write-blog-content').value;
        document.getElementById('content_length').innerHTML = '(' + contentlength.length + '/255)';
        setContent(e.target.value);
    }
    function handleCategoryChange(e){
        setCategory(e.target.value);
    }
    function handleImgFileChange(e){
        setImgFile(e.target.files[0]);
        console.log(imgfile);
    }
    function LineBreak(type){
        switch(type){
            case 'break':
                const withBreak = document.getElementById('write-blog-content').value + '<br><br>';
                document.getElementById('write-blog-content').value = withBreak;
                break;
            case 'bold':
                const withBold = document.getElementById('write-blog-content').value + '<b></b>';
                document.getElementById('write-blog-content').value = withBold;
                break;
            case 'italic':
                const withItalic = document.getElementById('write-blog-content').value + '<i></i>';
                document.getElementById('write-blog-content').value = withItalic;
                break;
            case 'underline':
                const withUnderline = document.getElementById('write-blog-content').value + '<u></u>';
                document.getElementById('write-blog-content').value = withUnderline;
                break;
            default: 
                break;
        }
    }
    setInterval(dateChange,1000)
    function dateChange(){
        document.getElementById('write-blog-date').value = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }
    function postBlog(){
        var idTitle = vietnameseConvert(title);
        axios.post('/uploadImage',{
            image: imgfile
        },{
            headers: {
                "Content-Type" : "multipart/form-data"
            },
        }).then(res=>{
            res.data.status === 'error' ? messageSweetAlert('Đăng hình ảnh thất bại',`${res.data.content}`,'error') : 
                axios.post('/writeblog',{
                    idTitle: idTitle,
                    title: title,
                    content: content,
                    category: category,
                    date: document.getElementById('write-blog-date').value,
                    imageName: 'img/blog/' + res.data.content
                }).then(res=>{
                    res.data.status === 'error' ? messageSweetAlert('Đăng blog thất bại',`${res.data.content}`,'error') : messageSweetAlert('Đăng blog thành công',`${res.data.content}`,'success')
                }).catch(function(err){
                    console.log(err);
                });
        }).catch(function(err){
            console.log(err);
        });
    }
    return(
        <form className="mt-5">
            <label className='text-rose-500 text-md' >Tiêu đề: </label>
            <input type="text" id="write-blog-title" onChange={handleTitleChange} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Nhập tiêu đề của bài blog"/>
            <label className='text-rose-500 text-md' >Content: </label>
            <div className="grid grid-cols-5 gap-4">
                <button type="button" className="w-full my-3 py-2 border hover:border-rose-500 rounded-md" onClick={()=>LineBreak('break')}>Xuống dòng</button>
                <button type="button" className="w-full my-3 py-2 border hover:border-rose-500 rounded-md" onClick={()=>LineBreak('bold')}>Bold</button>
                <button type="button" className="w-full my-3 py-2 border hover:border-rose-500 rounded-md" onClick={()=>LineBreak('italic')}>Italic</button>
                <button type="button" className="w-full my-3 py-2 border hover:border-rose-500 rounded-md" onClick={()=>LineBreak('underline')}>Underline</button>
            </div>                
            <p id='content_length'>(0/255)</p>
            <textarea id="write-blog-content" onChange={handleContentChange} className='w-full h-80 my-3 px-3 py-3 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Nhập nội dung của bài blog"/>
            <label className='text-rose-500 text-md' >Thể loại: </label>
            <select id="write-blog-category" onInput={handleCategoryChange} className='w-full my-3 px-3 py-2 border shadow-sm rounded-md'>
                <option>Hãy chọn thể loại</option>
                <option value={'Blog'}>Blog</option>
                <option value={'Story'}>Story</option>
                <option value={'Life'}>Life</option>
            </select>
            <label className='text-rose-500 text-md' >Hình ảnh: </label>
            <input type="file" name="write-blog-image-file" onChange={handleImgFileChange} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Hãy chọn file hình"/>
            <label className='text-rose-500 text-md' >Date: </label>
            <input type="text" id="write-blog-date" defaultValue={moment(new Date()).format("YYYY-MM-DD HH:MM:ss")} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Date" readOnly/>
            <button type="button" onClick={postBlog} className="w-full my-3 py-2 border hover:border-rose-500 rounded-md">Đăng bài</button>
        </form>    
    );
}

export default FormWriteBlog;