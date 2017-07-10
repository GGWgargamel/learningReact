import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class BasicExample extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
)



ReactDOM.render(<BasicExample/>,document.getElementById('mainContainer'))