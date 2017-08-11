/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import MHeader from './mHeader';
import MFooter from './mFooter';
import MContent from './mMainContent'
import {Tabs} from 'antd';

const TabPane=Tabs.TabPane;
export default class MIndex extends React.Component{
    handleChange(){

    }
    render(){
        return(
            <div>
                <MHeader/>
                <MContent/>
                <MFooter/>
            </div>
        )
    }
}
/**
 * Created by admin on 2017/7/11.
 */
