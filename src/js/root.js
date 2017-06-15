/**
 * Created by admin on 2017/6/15.
 */
var React = require("react");
var ReactDom = require("react-dom");
import ComponentHeader from './components/header';


class Index extends React.Component{
    render(){
        return(
            <ComponentHeader/>
        )
    }
}

ReactDom.render(<Index/>,document.getElementById('mainContainer'));