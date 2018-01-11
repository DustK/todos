import * as React from 'react';
import * as ReactDOM from 'react-dom';

//引入redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import APP from "./containers/APP";


ReactDOM.render(
    <Provider>
        <APP/>
    </Provider>,document.getElementById("app")
)