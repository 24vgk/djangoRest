import React from 'react';
import './App.css';
import AuthorList from "./components/Author";
import UserList from "./components/Users";
import LoginForm from './components/LoginForm';
import Footer from './components/footer';
import MainMenu from './components/header';
import axios from "axios";
const AuthApi = 'http://127.0.0.1:8000/userapp/api-token-auth/';
const UserApi = 'http://127.0.0.1:8000/api/Users/';


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'authors': [],
           'users': [],
           'token': '',
           'currentUser': '',
              'projects': [],
              'notes': [],
       }
   }

     is_Auth() {
    return this.state.token !== ''
  }

   get_token(login, password) {
    axios.post(AuthApi, {
      username: login,
      password: password
    })
      .then(response => {
        const token = response.data.token
        console.log('token:', token)
        localStorage.setItem('token', token)
        localStorage.setItem('currentUser', login)
        this.setState(
          {
            'token': token,
            'currentUser': login,
          }, this.getData)
      }).catch(error => alert('Неверный логин или пароль'))
  }

      componentDidMount() {
        let token = localStorage.getItem('token')
        let username = localStorage.getItem('currentUser')
        this.setState(
          {
            'token': token,
            'currentUser': username
          }, this.getData)
      }

    getHeaders() {
    if (this.is_Auth()) {
      return { 'Authorization': `Token ${this.state.token}` }
    }
    return {}
  }
  getData() {

    let headers = this.getHeaders()

    axios.get(UserApi, { headers })
           .then(response => {
               const users = response.data
               this.setState(
                   {
                       users,
                   }
               )
           }).catch(error => {console.log(error)
           this.setState({ users: [] })})

  }


   render () {
       return (
           <div>
               <div>
                    <nav>
                        <MainMenu is_Auth={() => this.is_Auth()} logOut={() => this.logOut()} currentUser={this.state.currentUser} />
                    </nav>
                    <LoginForm get_token={(login, password) => this.get_token(login, password)} />
               </div>
               <br/>
               <br/>
               <br/>
               <div>
                    <AuthorList authors={this.state.authors}/>
               </div>
               <br/>
               <br/>
               <div>
                    <UserList users={this.state.users}/>
               </div>
               <br/>
               <br/>
               <Footer />
           </div>
       )
   }
}

export default App;