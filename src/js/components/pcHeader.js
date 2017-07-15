/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import {Row,Col,Menu,Icon} from 'antd';

export default class pc_Header extends React.Component{
    constructor(){
        super();
        this.state= {
            current: "top"
        }
    }
    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/img/index/news.png" alt=""/>
                            <span>news</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" defaultSelectedKeys={[this.state.current]}>
                            <Menu.Item key="top" ><Icon type="appstore"/>头条</Menu.Item>
                            <Menu.Item key="tiyu"><Icon type="appstore"/>体育</Menu.Item>
                            <Menu.Item key="yule"><Icon type="appstore"/>娱乐</Menu.Item>
                            <Menu.Item key="keji"><Icon type="appstore"/>科技</Menu.Item>
                            <Menu.Item key="shehui"><Icon type="appstore"/>社会</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>

                </Row>
            </header>
        )
    }
}