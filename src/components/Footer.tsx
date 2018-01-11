import * as React from 'react';
import * as ReactDOM from 'react-dom';


class Footer extends React.Component{
    render(){
        return (
            <div>
                <button>全部</button>
                <button>进行中</button>
                <button>已完成</button>
                <button>未完成</button>
            </div>
        )
    }
}

export default Footer;