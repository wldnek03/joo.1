import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': '이지우',
  'birthday': '030415',
  'gender' : '여자'
}
class App extends Component{
  render(){
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        />
    );
  }
}

export default App;
