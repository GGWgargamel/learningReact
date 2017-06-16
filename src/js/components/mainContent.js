/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';
import ReactMixin from 'react-mixin';
import BodyChild from './mainChild';
import MixinLog from '../mixins/mixins'

const defaultProps={
    userName:"默认"
}
export default class ComponentMain extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"parry"
        };
    }
    handleChildValue(event){
        console.log(event.target.className)
        this.setState({
            userName:event.target.className
        })
    }

    changeState(){
        MixinLog.log()
        this.setState({
            userName:"hello"
        })
    }
    render(){
        return(
            <div>
                <h1>主要内容</h1>
                <p>{this.state.userName==""?"用户":this.state.userName}</p>
                <button  onClick={this.changeState.bind(this)}>哈哈</button>
                <p>{this.props.userId}</p>
                <p>{this.props.userName}</p>
                <BodyChild handleChildValue={this.handleChildValue.bind(this)} {...this.props}/>
            </div>
        )
    }
}
ComponentMain.protoTypes={
    userId:React.PropTypes.number.isRequired
};

ComponentMain.defaultProps=defaultProps;

ReactMixin(ComponentMain.prototype,MixinLog);