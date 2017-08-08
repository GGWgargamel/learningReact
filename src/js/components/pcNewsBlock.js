/**
 * Created by admin on 2017/8/8.
 */
import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export default class PcNewsBlock extends React.Component{
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news:json}));
    };

    render() {
        const News = () =>(
            <div>
                <h2>About</h2>
            </div>
        )
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
            <Router>
                <ul>
                    <li key={index}>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </li>
                    <Route path={`details/${newsItem.uniquekey}`} component={News}/>
                </ul>
            </Router>
        ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card>
                    {newsList}
                </Card>
            </div>
        );
    };
}