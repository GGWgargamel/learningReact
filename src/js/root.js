/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/pcIndex';
import MIndex from './components/mIndex';
import PCnewsDetail from './components/pc_detail';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import {Router, Route, hashHistory} from 'react-router';



export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router history={hashHistory}>
                        <div>
                            <Route path="/" component={Index}></Route>
                            <Route path="/details/:uniquekey" component={PCnewsDetail}></Route>
                        </div>
                    </Router>
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