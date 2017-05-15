// tag::vars[]
import React, {Component} from 'react';
//const React = require('react');
const ReactDOM = require('react-dom')
//const client = require('./client');
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
import { Button } from 'react-bootstrap';
import {FormGroup,Checkbox, PageHeader, SplitButton, Table, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';


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

export default Top;