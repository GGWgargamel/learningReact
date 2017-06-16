/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';
import {Button,Input} from 'antd';

export  default class ComponentHeader extends React.Component{
    render(){
        return(
            <header>
                <Button type="primary">按钮</Button>
                <h1>头部</h1>
                <Input type="text"/>
            </header>
        )
    }
}