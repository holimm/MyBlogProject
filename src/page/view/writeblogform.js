import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

function FormWriteBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    function handleTitleChange(e){
        setTitle(e.target.value);
    }
    function handleContentChange(e){
        setContent(e.target.value);
    }
    function handleCategoryChange(e){
        setCategory(e.target.value);
    }
    function handleDateChange(e){
        setDate(e.target.value);
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
        }
    }
    function postBlog(){
        axios.post('/writeblog',{
            title: title,
            content: content,
            category: category,
            date: date
        }).then(res=>{
            console.log(res.data);
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
            <textarea id="write-blog-content" onChange={handleContentChange} className='w-full h-80 my-3 px-3 py-3 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Nhập nội dung của bài blog"/>
            <label className='text-rose-500 text-md' >Thể loại: </label>
            <select id="write-blog-category" onInput={handleCategoryChange} className='w-full my-3 px-3 py-2 border shadow-sm rounded-md'>
                <option>Hãy chọn thể loại</option>
                <option value={'Blog'}>Blog</option>
                <option value={'Story'}>Story</option>
                <option value={'Life'}>Life</option>
            </select>
            <label className='text-rose-500 text-md' >Date: </label>
            <input type="text" id="write-blog-title" defaultValue={moment(new Date()).format("YYYY-MM-DD HH:MM ")} onChange={handleDateChange} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder="Date"/>
            <button type="button" onClick={postBlog} className="w-full my-3 py-2 border hover:border-rose-500 rounded-md">Đăng bài</button>
        </form>    
    );
}

export default FormWriteBlog;