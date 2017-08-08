/**
 * Created by admin on 2017/8/8.
 */
import React from 'react';
import {Row,Col} from  'antd';
import {Tabs,Carousel} from 'antd';
import PcNewsBlock from './pcNewsBlock';
import PcNewsImg from './pcNewsImg';

const TabPane=Tabs.TabPane;

export default class pc_mainContent extends React.Component{
    render(){
        const settings = {
            dots:true,
            autoplay:true,
            effect:"fade",
            speed:1000,
            slideToShow:1,
            infinite:true
        }

        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContent">
                            <div className="carousel">
                                <Carousel {...settings} className="carouselContainer">
                                    <div><img src="./src/img/index/1.jpg" alt=""/></div>
                                    <div><img src="./src/img/index/2.jpg" alt=""/></div>
                                    <div><img src="./src/img/index/3.jpg" alt=""/></div>
                                    <div><img src="./src/img/index/4.jpg" alt=""/></div>
                                    <div><img src="./src/img/index/5.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PcNewsBlock type={"top"} count={20}/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PcNewsBlock type={"guoji"} count={20}/>
                            </TabPane>
                            <TabPane tab="娱乐" key="3">
                                <PcNewsBlock type={"yule"} count={20}/>
                            </TabPane>
                            <TabPane tab="体育" key="4">
                                <PcNewsBlock type={"tiyu"} count={20}/>
                            </TabPane>
                            <TabPane tab="社会" key="5">
                                <PcNewsBlock type={"shehui"} count={20}/>
                            </TabPane>
                        </Tabs>
                        <PcNewsImg type={"top"} count={3}/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}