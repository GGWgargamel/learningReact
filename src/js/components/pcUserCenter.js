/**
 * Created by admin on 2017/8/10.
 */
import React from 'react';
import {Tabs} from 'antd'
import {Row,Col} from 'antd';

const TabPane=Tabs.TabPane;
export default class pcUserCenter extends React.Component{
    render(){
        return(
            <Tabs>
                <TabPane key="1" tab="收藏列表">

                </TabPane>
                <TabPane key="2" tab="评论列表">

                </TabPane>
                <TabPane key="2" tab="评论列表">

                </TabPane>
            </Tabs>
        )
    }
}