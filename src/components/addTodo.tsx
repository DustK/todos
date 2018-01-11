import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {addTodo} from "../action/index";


class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <input type="text"/>
                <button>add</button>
            </div>
        )
    }
}

const Todo = connect()(AddTodo)

export default AddTodo;