/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';

export default class ComponentMain extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"parry"
        };
    }
    render(){
        var userName="Parry";
        var boolen=true;
        var html="1"
        var waa="2";
        var that=this;
        function changeState(){
            that.setState({
                userName:"hello"
            })
        }

        return(
            <div>
                <h1>主要内容</h1>
                <p>{this.state.userName==""?"用户":this.state.userName}</p>
                <button  onClick={changeState}>哈哈</button>
                <p>{html}</p>{/*需要unicode转码*/}
                <p dangerouslySetInnerHTML={{__html:html}}></p>
            </div>
        )
    }
}