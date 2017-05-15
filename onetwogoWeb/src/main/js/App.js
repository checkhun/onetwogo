// tag::vars[]
import React, {Component} from 'react';
//const React = require('react');
const ReactDOM = require('react-dom')
//const client = require('./client');
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
import { Button } from 'react-bootstrap';
import {FormGroup,Checkbox, PageHeader, SplitButton, Table, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';

// end::vars[]

// tag::app[]
class App extends Component {
//class App extends React.Component {
    render(){
        return  (
        	<Top/>
        );
    }
}

class Top extends React.Component {
    render(){
        return (
        	 <div className="top">
        	 <PageHeader>
        	 <table><tbody><tr>
        		<td>12GO</td>
				<td>
				  <SplitButton id="test1"  title="테마선택" className="split-btn-150" >
			        <MenuItem eventKey="1">아이와 함께 가기 좋은 곳</MenuItem>
			        <MenuItem eventKey="2">회식 및 단체모임</MenuItem>
			        <MenuItem eventKey="3">백종원의 3대천왕</MenuItem>
			      </SplitButton></td>
			      <td>
			      <SplitButton id="test2"  title="지역선택" className="split-btn-150">
			        <MenuItem eventKey="1">분당1111</MenuItem>
			        <MenuItem eventKey="2">잠실</MenuItem>
			        <MenuItem eventKey="3">판교</MenuItem>
			        <MenuItem eventKey="4">위례</MenuItem>
			      </SplitButton>
			      </td>
			      <td><Button bsStyle="primary">조회</Button></td>
			      <td className="td-small">My Page</td>
			      <td className="td-small">로그아웃</td>
			      </tr>
			      </tbody>
			    </table>
			    </PageHeader>
             </div>
               
        );
    }
}

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

class Footer extends React.Component {
    render(){
        return (
            <div>
                <h2>footer</h2>
            </div>
        );
    }
}
// end::employee[]

// tag::render[]
export default App;



//ReactDOM.render(gridInstance, mountNode);
// end::render[]


//<Grid>
//    <Row className="show-grid">
//	    <Col md={2}><Filter/></Col>
//	    <Col md={2}><h2>Contents</h2>
//            <Table responsive>
//				<tbody>
//					<tr>
//						<td>사진</td>
//						<td>설명</td>
//					</tr>
//				</tbody>
//			</Table>
//		</Col>
//    </Row>
//</Grid>
//
//<Table responsive>
//	<tbody>
//		<tr className="tr-100">
//			<td>사진</td>
//			<td>설명</td>
//		</tr>
//		<tr className="tr-100">
//			<td>사진</td>
//			<td>설명</td>
//		</tr>
//		<tr className="tr-100">
//			<td>사진</td>
//			<td>설명</td>
//		</tr>
//	</tbody>
//</Table>
