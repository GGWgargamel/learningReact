/**
 * Created by admin on 2017/6/15.
 */
import React from 'react';
var  fooerCss = require('../../css/footer.css');

export default class ComponentFooter extends React.Component{
    render(){
        console.log(fooerCss)
        return(
            <footer className="redColor">
                <h1>底部</h1>
            </footer>
        )
    }
}