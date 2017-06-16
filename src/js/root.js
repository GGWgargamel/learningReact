/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentMain from './components/mainContent';


class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentHeader/>
                <ComponentMain userId={12356} />
                <ComponentFooter/>
            </div>

        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('mainContainer'));