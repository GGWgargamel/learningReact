/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/pcIndex';
import MIndex from './components/mIndex';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Index/>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MIndex/>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(
    <Root/>,document.getElementById('mainContainer')
);