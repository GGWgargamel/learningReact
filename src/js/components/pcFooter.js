/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import {Row,Col} from "antd";

export default class PcFooter extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>copyright</Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}