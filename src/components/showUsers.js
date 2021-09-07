import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class showUsers extends Component{

	constructor(props){
		super(props);
		this.state={
			users:[]
		};
        this.deleteStudent = this.deleteStudent.bind(this);
	}

	componentDidMount(){
		axios.get('http://3.6.93.159:7883/machstatz/get_all_users')
		.then(response => {
			console.log(response);
			this.setState({users: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}

    deleteStudent(email) {
        console.log(email)
        axios.delete(`http://3.6.93.159:7883/machstatz/delete_existing_user/${email}`,{headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

	render(){

		const {users}=this.state;

		return(
			<div>
		<div className="my-5">
			<h1 className="text-center color-red">USER MANAGEMENT SYSTEM</h1>
		</div>
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            {users.length?users.map(user=>
                <div className="col" key={user.id}>
                    <div className="p-3 border bg-light"><i className="fas fa-trash"></i>
                        <center><i><h3>{user.first_name}{" "}{user.last_name}</h3></i></center>
                    </div>
                </div>):null}
            </div>
        </div>
		{/*<div className="container-fluid mb-5">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row gy-4">
					{users.length?
						users.map(user=>
						<div className="col-md-4 col-10 mx-auto">
						<div key={user.id} className="card c1">
							  <div className="card-body">
							  	<hr/>
							    <h5 className="card-title text-center color-red">{user.first_name}</h5>
							    <p className="card-text text-center">{user.username}</p>
                                <Button className="text-center" onClick={()=>this.deleteStudent(user.email)} size="sm" variant="danger">Delete</Button>
							  </div>
						</div>
						</div>):null}
					</div>
				</div>
			</div>
                        </div>*/}
		</div>
		);
	}
}

export default showUsers;