/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import {Row,Col,Menu,Icon} from 'antd';

export default class MHeader extends React.Component{
    constructor(){
        super();
        this.state= {
            current: "top"
        }
    }
    render(){
        return(
            <div id="mobile">
                <header>
                    <img src="./src/img/index/news.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>

        )
    }
}