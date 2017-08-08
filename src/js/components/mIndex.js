/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import MHeader from './mHeader';
import MFooter from './mFooter';
import {Tabs} from 'antd';

const TabPane=Tabs.TabPane;
export default class MIndex extends React.Component{
    handleChange(){

    }
    render(){
        return(
            <div>
                <MHeader/>
                <Tabs type="card" onChange={this.handleChange.bind(this)}>
                    <TabPane key="1">头条</TabPane>
                    <TabPane key="2">体育</TabPane>
                    <TabPane key="3">娱乐</TabPane>
                    <TabPane key="4">科技</TabPane>
                    <TabPane key="5">社会</TabPane>
                </Tabs>
                <MFooter/>
            </div>
        )
    }
}
/**
 * Created by admin on 2017/7/11.
 */
