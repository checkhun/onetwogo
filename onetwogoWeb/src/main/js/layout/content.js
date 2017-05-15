import React, {Component} from 'react';
const ReactDOM = require('react-dom')
//const client = require('./client');
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
import { Button } from 'react-bootstrap';
import {FormGroup,Checkbox, PageHeader, SplitButton, Table, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';

class Content extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {users: []};
	}
	
//	componentDidMount() {
//		client({method: 'GET', path: '/api/users'}).done(response => {
//			this.setState({users: response.entity._embedded.users});
//		});
//	}
	
    render(){
        return (
        	
            <div className="content-body">
	            <Filter/>
	            <div className="content-right">
					<UserList users={this.state.users} />
	            </div>

            </div>
        );
    }
}

class Filter extends React.Component {
	render(){
	  return (
	      <div className="filter">
	          <FormGroup>
	            <SplitButton id="test" className="split-btn-150" title="메뉴" id="dropdown-size-large">
			        <MenuItem eventKey="1">한식</MenuItem>
			        <MenuItem eventKey="2">중식</MenuItem>
			        <MenuItem eventKey="3">일식</MenuItem>
			      </SplitButton>
			      <br/><br/>
		            <Checkbox >
		              유아용 메뉴여부
		            </Checkbox>
		            <Checkbox>
		              좌식 또는 유아용 의자 보유 여부
		            </Checkbox>
		            <Checkbox>
		              놀이방 보유여부
		            </Checkbox>
		            <Checkbox>
		              주차 가능여부
		            </Checkbox>
	        </FormGroup>
	      </div>
	  );
	}
}

class UserList extends React.Component{
render() {
	var users = this.props.users.map(user =>
		<User key={user._links.self.href} user={user}/>
	);
	return (
		<Table responsive>
			<tbody>
				<tr className="tr-100">
					<td>사진</td>
					<td>설명</td>
				</tr>
		    {users}
		    </tbody>
		</Table>
	)
}
}
class User extends React.Component{
render() {
	return (
		<tr className="tr-100">
			<td>{this.props.user.regDt}</td>
			<td>{this.props.user.userClsf}</td>
		</tr>
	)
}
}




export default Content;