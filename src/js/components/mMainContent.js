/**
 * Created by admin on 2017/8/8.
 */
import React from 'react';
import {Row,Col} from  'antd';
import {Tabs,Carousel} from 'antd';
import MNewsBlock from './mNewsBlock';

const TabPane=Tabs.TabPane;
const antWidth={
    "width":"100%"
}
export default class m_mainContent extends React.Component{
    render(){
        return(
            <div className="tabs_new">
                <Tabs className="tabs_news" pageSize={5} style={antWidth}>
                    <TabPane tab="新闻" key="1">
                        <MNewsBlock type={"top"} count={20}/>
                    </TabPane>
                    <TabPane tab="国际" key="2">
                        <MNewsBlock type={"guoji"} count={20}/>
                    </TabPane>
                    <TabPane tab="娱乐" key="3">
                        <MNewsBlock type={"yule"} count={20}/>
                    </TabPane>
                    <TabPane tab="体育" key="4">
                        <MNewsBlock type={"tiyu"} count={20}/>
                    </TabPane>
                    <TabPane tab="社会" key="5">
                        <MNewsBlock type={"shehui"} count={20}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
