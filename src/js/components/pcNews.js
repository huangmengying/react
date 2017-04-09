import React from 'react';
import {Card} from "antd";

import {Router, Route, Link, browserHistory} from 'react-router';

class PcNews extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            methods: 'GET',
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
        .then(response =>
            response.json())
        .then(json =>
            this.setState({
                news: json
            }))
    }

    render() {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((item, index) => (
                <li key={index}>
                    <Link to={`details/${item.uniquekey}`} target="_blank">
                        {item.title}
                    </Link>
                </li>
            ))
            : '没有消息！'

        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
export default PcNews;