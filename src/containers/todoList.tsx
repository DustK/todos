import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Item from "../components/item";


class TodoList extends React.Component{
    render(){
        return (
            <ul>
                <Item/>
            </ul>
        )
    }
}

export default TodoList;