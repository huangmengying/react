import React from 'react';
import MobileHeader from './mobileHeader';
import MobileFooter from './mobileFooter';
import {
  Row,
  Col,
  BackTop,
} from 'antd';
import Comment from './common';

class MobileDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: '',
    }
  }
  componentDidMount() {
    var myOptionals = {
      method: 'GET'
    };

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myOptionals)
    .then(response => response.json())
    .then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    });

    console.log(this.props.params.uniquekey);
  }

  createMarkup() {
    return {
      __html:this.state.newsItem.pagecontent,
    };
  };

  render() {
    return (
      <div className="mobileDetailContainer">
        <div>
          <MobileHeader />
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              <Comment uniquekey={this.props.params.uniquekey}></Comment>
            </Col>
          </Row>
          <MobileFooter />
          <BackTop></BackTop>
        </div>
      </div>

    )
  }
}

export default MobileDetails;
