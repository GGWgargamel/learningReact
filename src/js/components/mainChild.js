/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class bodyChild extends React.Component{
    constructor(){
        super();
        this.state={
            heighter:false
        }
    }
    handleEvent(){
        var h1=document.getElementById("h1");
        ReactDOM.findDOMNode(h1).style.color="red"
        console.log(this.refs.h1);
        this.refs.h1.style.fontSize="70px";
        MixinLog.log();
    }
    changeHeight(){
        this.setState({
            heighter:!this.state.heighter
        })
    }
    render(){
        const styleComponent={
            childs:{
                color:"#222222",
                fontSize:"50px",
                marginBottom:(this.state.heighter)?"30px":"100px",
            }
        }
        return(
            <div>
                <p onClick={this.props.handleChildValue} className="childs" style={styleComponent.childs}>子页面</p>
                <h1 id="h1" onClick={this.handleEvent.bind(this)}  ref="h1">{this.props.userId}</h1>
                <p onClick={this.changeHeight.bind(this)}>改变</p>
            </div>
        )
    }
}

