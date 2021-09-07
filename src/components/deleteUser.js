import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class deleteUser extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          email: ''
        }
      }
    
      onChangeUserEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            email: this.state.email
          };
    
        console.log(`User deleted!`);
        console.log(`Email: ${this.state.email}`);
        axios.delete('http://3.6.93.159:7883/machstatz/delete_existing_user', studentObject)
      .then(res => console.log(res.data));
    
        this.setState({email: ''})
      }

  render() {
    return (<div class="form-wrapper">
      <Form onSubmit={this.onSubmit}>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Delete User
        </Button>
      </Form>
    </div>);
  }
}