import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class createUser extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          fname: '',
          lname:'',
          pass:'',
          email: '',
          username: ''
        }
      }
    
      onChangeFirstName(e) {
        this.setState({fname: e.target.value})
      }

      onChangeLastName(e) {
        this.setState({lname: e.target.value})
      }
    
      onChangeUserEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeUserName(e) {
        this.setState({username: e.target.value})
      }

      onChangePassword(e){
          this.setState({pass: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            email: this.state.email,
            first_name:this.state.fname,
            last_name:this.state.lname,
            pwd:this.state.pass,
            username: this.state.username
          };
    
        console.log(`User successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Username: ${this.state.username}`);
        axios.post('http://3.6.93.159:7883/machstatz/add_new_user', studentObject)
      .then(res => console.log(res.data));
    
        this.setState({email: '',first_name:'',last_name:'',pwd:'', username: ''})
      }

  render() {
    return (<div className="form-wrapper">
    <div className="container">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangeFirstName}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangeLastName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.pass} onChange={this.onChangePassword}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.onChangeUserName}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create User
        </Button>
      </Form>
      </div>
    </div>);
  }
}