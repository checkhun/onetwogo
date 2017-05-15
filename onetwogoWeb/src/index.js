import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import Top from './main/js/layout/top';
import Content from './main/js/layout/content';

//import {createStore} from 'redux';
//import reducers from './reducers';
/*import * as actions from './actions';*/
//import { Provider } from 'react-redux';



ReactDOM.render( 
	<div>
    	<Top/>
    	<Content/>
    </div>,
    document.getElementById('root')
);
