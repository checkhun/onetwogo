'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');
import { Button } from 'react-bootstrap';
import {FormGroup,Checkbox, PageHeader, SplitButton, Table, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';

// end::vars[]

// tag::app[]
class App extends React.Component {
    render(){
        return  (
            <div>
                <Top/>
                <Content/>
            </div>
        );
    }
}

class Top extends React.Component {
    render(){
        return (
        	 <div className="top">
        	 <PageHeader>
        	 <table><tbody><tr>
        		<th>12GO</th>
				<th>
				  <SplitButton title="테마선택" className="split-btn-200" id="dropdown-size-large">
			        <MenuItem eventKey="1">아이와 함께 가기 좋은 곳</MenuItem>
			        <MenuItem eventKey="2">회식 및 단체모임</MenuItem>
			        <MenuItem eventKey="3">백종원의 3대천왕</MenuItem>
			      </SplitButton></th>
			      <th width="500px">
			      <SplitButton title="지역선택" className="split-btn-200" id="dropdown-size-large">
			        <MenuItem eventKey="1">분당</MenuItem>
			        <MenuItem eventKey="2">잠실</MenuItem>
			        <MenuItem eventKey="3">판교</MenuItem>
			        <MenuItem eventKey="4">위례</MenuItem>
			      </SplitButton>
			      </th>
			      <th><Button bsStyle="primary">My Page</Button></th>
			      <th><Button bsStyle="primary">로그아웃</Button></th>
		            
			      </tr>
			      </tbody>
			    </table>
			    </PageHeader>
             </div>
               
        );
    }
}

class Content extends React.Component {
    render(){
        return (
            <div className="content-body">
	            <Filter/>
	            <div className="content-right">
		            <Table responsive>
						<tbody>
							<tr className="tr-100">
								<td>사진</td>
								<td>설명</td>
							</tr>
							<tr className="tr-100">
								<td>사진</td>
								<td>설명</td>
							</tr>
							<tr className="tr-100">
								<td>사진</td>
								<td>설명</td>
							</tr>
						</tbody>
						
					</Table>
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
	              <SplitButton className="split-btn-100" title="메뉴" id="dropdown-size-large">
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
ReactDOM.render(
	<App />,
	document.getElementById('react')
)

ReactDOM.render(gridInstance, mountNode);
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
