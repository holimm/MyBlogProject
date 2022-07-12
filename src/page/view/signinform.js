import React, { useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {messageToastr, messageSweetAlert} from '../accessible/message.js';

function FormLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e){
      setUsername(e.target.value);
    }
    function handlePasswordChange(e){
      setPassword(e.target.value);
    } 
    function signIn(){
      username==='' || password==='' ? messageToastr('Vui lòng nhập đầy đủ thông tin','error') : sendData();
    }
    function sendData(){
      axios.post('/signin', {
          username: username,
          password: password
        })
        .then(res => {
          var respondData = res.data;
          if(!respondData[0]){
            // messageToastr('Sai tên đăng nhập hoặc mật khẩu','error');
            messageSweetAlert('Đăng nhập thất bại',`Sai tên đăng nhập hoặc mật khẩu`,'error');
            return;
          }
          else{
            if(respondData[0].username === username && respondData[0].password === password){
              messageSweetAlert('Đăng nhập thành công',`Xin chào, ${username}!`,'success');
              sessionStorage.setItem('username',username);
              navigate('/');
              return;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });        
    }
    return (
      <form className="mt-5">
          <label className='text-rose-500 text-md' >Tên đăng nhập: </label>
          <input type="text" id="inputusername" onChange={handleUsernameChange} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='Hãy nhập username'/>
          <label className='text-rose-500 text-md' >Mật khẩu: </label>
          <input type="password" id="inputpassword" onChange={handlePasswordChange} className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='**********'/>
          <button type="button" onClick={signIn} className='my-6 mb-12 w-full py-2 bg-gradient-to-r text-white from-rose-400 via-red-500 to-rose-600 hover:from-rose-600 hover:to-red-700 rounded-md'>Đăng nhập</button>
      </form>
    );
}

export default FormLogin;