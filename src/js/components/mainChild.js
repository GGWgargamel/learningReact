/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';

export default class bodyChild extends React.Component{
    render(){
        return(
            <div>
                <p onClick={this.props.handleChildValue} className="childs">子页面</p>
                <h1>{this.props.userId}</h1>
            </div>
        )
    }
}