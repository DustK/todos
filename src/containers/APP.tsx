import * as React from 'react';
import * as ReactDOM from 'react-dom';

//这里要集成的是三部分的组件,分别是 添加todu输入框，todo列表，过滤器

// 导入组件
import AppTodo from "../components/addTodo";
import TodoList from "../containers/todoList";
import Footer from "../components/Footer";

class APP extends React.Component{
    render(){
        return (
            <div>
                <AppTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

export default APP;