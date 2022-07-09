import React from 'react';
import axios from 'axios';

class FormLogin extends React.Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        username:'',
        password:''
      };
    }
    handleUsernameChange(e){
      this.setState({username: e.target.value});
    }
    handlePasswordChange(e){
      this.setState({password: e.target.value})
    }
    signIn(){
        axios.post('/signin', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res => {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Email address is ' + this.state.username + ' Password is ' + this.state.password);            
    }
    render() {
        return (
            <form className="mt-5">
                <label className='text-rose-500 text-md' >Tên đăng nhập: </label>
                <input type="text" onChange={this.handleUsernameChange} id="inputusername" className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='Hãy nhập username'/>
                <label className='text-rose-500 text-md' >Mật khẩu: </label>
                <input type="text" onChange={this.handlePasswordChange} id="inputpassword" className='w-full my-3 px-3 py-2 border shadow-sm focus:outline-rose-500 rounded-md' placeholder='**********'/>
                <button type="button" onClick={this.signIn} className='my-6 mb-12 w-full py-2 bg-gradient-to-r text-white from-rose-400 via-red-500 to-rose-600 rounded-md'>Đăng nhập</button>
            </form>
        );
    }
}

export default FormLogin;